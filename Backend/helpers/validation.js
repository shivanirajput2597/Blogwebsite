const Joi = require("@hapi/joi");

// Validation for liked data
const validateLikeData = (data) => {
    const schema = Joi.object({
        articleId: Joi.string().required()
    });

    const { error } = schema.validate(data);

    if (error) {
        return error.details[0].message;
    }
    return;
}
// Validation for Commented data
const validateCommentData = (data) => {
    const schema = Joi.object({
        articleId: Joi.string().required(),
        comment: Joi.string().required()
    });

    const { error } = schema.validate(data);

    if (error) {
        return error.details[0].message;
    }
    return;
}

// Validation for report data
const validateReportData = (data) => {
    const schema = Joi.object({
        articleId: Joi.string().required(),
        message: Joi.string().required()
    });

    const { error } = schema.validate(data);

    if (error) {
        return error.details[0].message;
    }
    return;
}

// Validation for register
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    const { error } = schema.validate(data);

    if (error) {
        return error.details[0].message;
    }
    return;
}

// Validation for login
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });

    const { error } = schema.validate(data);

    if (error) {
        return error.details[0].message;
    }
    return;
}

// validation for article
const articleValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        text: Joi.required(),
        tags: Joi.array().items(Joi.string()),
        headerImage: Joi.string()
    });

    const { error } = schema.validate(data);

    if (error) {
        return error.details[0].message;
    }
    return;
}

const adminLoginValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    });

    const { error } = schema.validate(data);

    if (error) {
        return error.details[0].message;
    }
    return;
}

const contactMessageValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        message: Joi.string().required()
    });

    const { error } = schema.validate(data);

    if (error) {
        return error.details[0].message;
    }
    return;
}

const updateProfileValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().min(6).required().email(),
        bio: Joi.string().required()
    });

    const { error } = schema.validate(data);

    if (error) {
        return error.details[0].message;
    }
    return;
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.articleValidation = articleValidation;
module.exports.validateLikeData = validateLikeData;
module.exports.validateCommentData = validateCommentData;
module.exports.validateReportData = validateReportData;
module.exports.adminLoginValidation = adminLoginValidation;
module.exports.contactMessageValidation = contactMessageValidation;
module.exports.updateProfileValidation = updateProfileValidation;
