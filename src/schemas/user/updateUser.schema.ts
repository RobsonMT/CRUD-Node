import * as yup from "yup";
import * as bcrypt from "bcrypt";

const updateUserSchema = yup.object().shape({
  name: yup
    .string()
    .transform((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    })
    .optional(),
  email: yup.string().email().optional(),
  password: yup
    .string()
    .transform((value) => {
      return bcrypt.hashSync(value, 10);
    })
    .optional(),
  isAdm: yup.boolean().optional(),
});

export { updateUserSchema };
