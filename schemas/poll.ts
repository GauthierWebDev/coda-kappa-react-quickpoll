import { z } from "zod";

export const QuestionSchema = z
  .string()
  .min(10, "La question doit contenir au moins 10 caractères")
  .max(200, "La question ne peut pas dépasser 200 caractères")
  .transform((value) => value.trim());

export const ChoiceSchema = z
  .string()
  .min(1, "Un choix ne peut pas être vide")
  .max(100, "Un choix ne peut pas dépasser 100 caractères")
  .transform((value) => value.trim());

export const ChoicesArraySchema = z
  .array(ChoiceSchema)
  .min(2)
  .max(4)
  .refine(
    (choices) => {
      const unique = new Set(choices);
      return unique.size === choices.length;
    },
    { error: "Les choix doivent être uniques" },
  );

export const CreatePollSchema = z.object({
  question: QuestionSchema,
  options: ChoicesArraySchema,
});

export type CreatePollInput = z.infer<typeof CreatePollSchema>;
