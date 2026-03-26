export interface FormActionState {
  status: "idle" | "success" | "error";
  message?: string;
}

export const idleFormState: FormActionState = {
  status: "idle"
};
