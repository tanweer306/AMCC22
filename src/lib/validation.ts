/**
 * Input validation and sanitization utilities
 * Prevents SQL injection, XSS attacks, and ensures data integrity
 */

// Email validation regex (RFC 5322 compliant)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// Phone number validation (US format)
const PHONE_REGEX = /^[\+]?[1]?[-.\s]?[\(]?[0-9]{3}[\)]?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;

// URL validation
const URL_REGEX = /^https?:\/\/(?:[-\w.])+(?:\:[0-9]+)?(?:\/(?:[\w\/_.])*)?(?:\?(?:[\w&=%.])*)?(?:\#(?:[\w.])*)?$/;

// State code validation (US states)
const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  sanitizedData?: any;
}

/**
 * Sanitizes string input to prevent XSS attacks
 */
export function sanitizeString(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    // Remove potentially dangerous HTML tags and scripts
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    // Limit length to prevent buffer overflow attacks
    .substring(0, 1000);
}

/**
 * Validates and sanitizes company data
 */
export function validateCompanyData(data: any): ValidationResult {
  const errors: ValidationError[] = [];
  const sanitized: any = {};

  // Validate name
  if (!data.name || typeof data.name !== 'string') {
    errors.push({ field: 'name', message: 'Company name is required' });
  } else {
    sanitized.name = sanitizeString(data.name);
    if (sanitized.name.length < 2) {
      errors.push({ field: 'name', message: 'Company name must be at least 2 characters' });
    } else if (sanitized.name.length > 255) {
      errors.push({ field: 'name', message: 'Company name must be less than 255 characters' });
    }
  }

  // Validate phone (optional)
  if (data.phone) {
    if (typeof data.phone !== 'string') {
      errors.push({ field: 'phone', message: 'Phone number must be a string' });
    } else {
      sanitized.phone = sanitizeString(data.phone);
      if (!PHONE_REGEX.test(sanitized.phone)) {
        errors.push({ field: 'phone', message: 'Invalid phone number format' });
      }
    }
  } else {
    sanitized.phone = '';
  }

  // Validate email (optional)
  if (data.email) {
    if (typeof data.email !== 'string') {
      errors.push({ field: 'email', message: 'Email must be a string' });
    } else {
      sanitized.email = sanitizeString(data.email).toLowerCase();
      if (!EMAIL_REGEX.test(sanitized.email)) {
        errors.push({ field: 'email', message: 'Invalid email format' });
      }
    }
  } else {
    sanitized.email = '';
  }

  // Validate state (optional)
  if (data.state) {
    if (typeof data.state !== 'string') {
      errors.push({ field: 'state', message: 'State must be a string' });
    } else {
      sanitized.state = sanitizeString(data.state).toUpperCase();
      if (!US_STATES.includes(sanitized.state)) {
        errors.push({ field: 'state', message: 'Invalid US state code' });
      }
    }
  } else {
    sanitized.state = '';
  }

  // Validate website (optional)
  if (data.website) {
    if (typeof data.website !== 'string') {
      errors.push({ field: 'website', message: 'Website must be a string' });
    } else {
      sanitized.website = sanitizeString(data.website).toLowerCase();
      if (!URL_REGEX.test(sanitized.website)) {
        errors.push({ field: 'website', message: 'Invalid website URL format' });
      }
    }
  } else {
    sanitized.website = '';
  }

  // Validate signup URL (optional)
  if (data.signup_url || data.signupUrl) {
    const signupUrl = data.signup_url || data.signupUrl;
    if (typeof signupUrl !== 'string') {
      errors.push({ field: 'signup_url', message: 'Signup URL must be a string' });
    } else {
      sanitized.signup_url = sanitizeString(signupUrl).toLowerCase();
      if (!URL_REGEX.test(sanitized.signup_url)) {
        errors.push({ field: 'signup_url', message: 'Invalid signup URL format' });
      }
    }
  } else {
    sanitized.signup_url = '';
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData: errors.length === 0 ? sanitized : undefined
  };
}

/**
 * Validates pagination parameters
 */
export function validatePaginationParams(page?: any, limit?: any): ValidationResult {
  const errors: ValidationError[] = [];
  const sanitized: any = {};

  // Validate page
  if (page !== undefined && page !== null) {
    const pageNum = parseInt(page);
    if (isNaN(pageNum) || pageNum < 1) {
      errors.push({ field: 'page', message: 'Page must be a positive integer' });
    } else if (pageNum > 1000) {
      errors.push({ field: 'page', message: 'Page number too large' });
    } else {
      sanitized.page = pageNum;
    }
  } else {
    sanitized.page = 1;
  }

  // Validate limit
  if (limit !== undefined && limit !== null) {
    const limitNum = parseInt(limit);
    if (isNaN(limitNum) || limitNum < 1) {
      errors.push({ field: 'limit', message: 'Limit must be a positive integer' });
    } else if (limitNum > 100) {
      errors.push({ field: 'limit', message: 'Limit cannot exceed 100' });
    } else {
      sanitized.limit = limitNum;
    }
  } else {
    sanitized.limit = 20;
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData: errors.length === 0 ? sanitized : undefined
  };
}

/**
 * Validates search query parameters
 */
export function validateSearchParams(query?: any, state?: any): ValidationResult {
  const errors: ValidationError[] = [];
  const sanitized: any = {};

  // Validate search query
  if (query !== undefined && query !== null) {
    if (typeof query !== 'string') {
      errors.push({ field: 'query', message: 'Search query must be a string' });
    } else {
      sanitized.query = sanitizeString(query);
      if (sanitized.query.length > 100) {
        errors.push({ field: 'query', message: 'Search query too long' });
      }
    }
  } else {
    sanitized.query = '';
  }

  // Validate state filter
  if (state !== undefined && state !== null) {
    if (typeof state !== 'string') {
      errors.push({ field: 'state', message: 'State filter must be a string' });
    } else {
      sanitized.state = sanitizeString(state).toUpperCase();
      if (sanitized.state !== 'ALL' && !US_STATES.includes(sanitized.state)) {
        errors.push({ field: 'state', message: 'Invalid state filter' });
      }
    }
  } else {
    sanitized.state = 'ALL';
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData: errors.length === 0 ? sanitized : undefined
  };
}

/**
 * Validates ID parameters
 */
export function validateId(id: any): ValidationResult {
  const errors: ValidationError[] = [];
  
  if (!id) {
    errors.push({ field: 'id', message: 'ID is required' });
  } else {
    const idNum = parseInt(id);
    if (isNaN(idNum) || idNum < 1) {
      errors.push({ field: 'id', message: 'ID must be a positive integer' });
    } else if (idNum > Number.MAX_SAFE_INTEGER) {
      errors.push({ field: 'id', message: 'ID too large' });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData: errors.length === 0 ? parseInt(id) : undefined
  };
}