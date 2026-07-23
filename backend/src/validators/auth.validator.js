const { z } = require('zod')

const registerSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(255),
  email: z.string().email('Email invalide'),
  password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères').regex(/[A-Z]/, 'Le mot de passe doit contenir au moins 1 majuscule').regex(/[0-9]/, 'Le mot de passe doit contenir au moins 1 chiffre')
})

const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Mot de passe requis')
})

const forgotPasswordSchema = z.object({ email: z.string().email('Email invalide') })
const resetPasswordSchema = z.object({ token: z.string().min(1), password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/) })
const verifyEmailSchema = z.object({ code: z.string().length(6, 'Le code doit contenir 6 chiffres') })
const refreshTokenSchema = z.object({ refreshToken: z.string().min(1) })
const updateProfileSchema = z.object({ name: z.string().min(2).max(255).optional(), phone: z.string().max(20).optional(), avatar: z.string().url().optional() })
const changePasswordSchema = z.object({ currentPassword: z.string().min(1), newPassword: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/) })

module.exports = { registerSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema, verifyEmailSchema, refreshTokenSchema, updateProfileSchema, changePasswordSchema }
