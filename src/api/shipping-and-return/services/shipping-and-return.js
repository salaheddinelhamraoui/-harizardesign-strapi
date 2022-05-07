'use strict';

/**
 * shipping-and-return service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shipping-and-return.shipping-and-return');
