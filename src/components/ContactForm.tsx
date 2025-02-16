/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {
  Typography,
  TextField,
  Button,
  Grid2 as Grid,
  Card,
  Snackbar,
  IconButton,
  Alert,
} from "@mui/material";
import { CapitalizedText } from "./Texts";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import ScrollAnimation from "./ScrollAnimation";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

type SnackProps = {
  message: string;
  type?: "success" | "error";
};

const VITE_EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const VITE_EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const VITE_EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [snack, setSnack] = useState<SnackProps | null>();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: async ({ message, email, name }, { resetForm }) => {
      try {
        const { text, status } = await emailjs.send(
          VITE_EMAILJS_SERVICE_ID,
          VITE_EMAILJS_TEMPLATE_ID,
          {
            reply_to: email,
            from_email: email,
            message,
            from_name: name,
          },
          { publicKey: VITE_EMAILJS_PUBLIC_KEY }
        );
        if (status === 200) {
          console.log(text);

          setSnack({
            message: `${text} - Message has been sent successfully!`,
            type: "success",
          });
          resetForm();
        }
      } catch (error: any) {
        const message = error.text ?? error.message ?? error;
        console.error("Failed to send email: ", message);
        setSnack({
          message,
          type: "error",
        });
      }
    },
  });

  return (
    <ScrollAnimation transitionType="grow" size={12} height="fit-content">
      <Card
        id="contact"
        elevation={1}
        sx={{
          position: "relative",
          p: { xs: 2, md: 10 },
          width: "100%",
          borderRadius: 10,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Snackbar
          open={!!snack}
          autoHideDuration={6000}
          onClose={() => setSnack(null)}
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => setSnack(null)}
            >
              <Close fontSize="small" />
            </IconButton>
          }
        >
          <Alert
            onClose={() => setSnack(null)}
            severity={snack?.type}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snack?.message}
          </Alert>
        </Snackbar>
        <CapitalizedText
          sx={({ typography }) => ({
            textAlign: "center",
            fontSize: {
              xs: typography.h6.fontSize,
              lg: typography.h2.fontSize,
            },
          })}
          fontWeight={800}
          gutterBottom
        >
          Get in Touch
        </CapitalizedText>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Have a question or want to work together? Feel free to reach out!
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                name="message"
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid size={12}>
              <Button
                type="submit"
                variant="contained"
                loading={formik.isSubmitting}
                disabled={
                  formik.isSubmitting || !formik.dirty || !formik.isValid
                }
                size="large"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </ScrollAnimation>
  );
};

export default ContactForm;
