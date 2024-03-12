import { z } from 'zod'

// Validação de variáveis de ambiente, presentes no .env.local.
const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url(),
})

export const env = envSchema.parse(import.meta.env)
