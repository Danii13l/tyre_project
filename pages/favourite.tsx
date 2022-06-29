import React, { FC } from "react";
import { Container } from "./../src/components/common_components/container/Container";
import { NextPage } from "next";
import { useFormik, FormikProps } from "formik";

import * as yup from "yup";

interface formsInt {
  firstName: string;
  lastName: string;
}

const fakeSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(5, "min length is 5")
    .required("Name is requared"),
  lastName: yup.string().required("Last name is requared"),
});

const Favourite: NextPage = (): JSX.Element => {
  const formik: FormikProps<formsInt> = useFormik<formsInt>({
    initialValues: { firstName: "", lastName: "" },
    validationSchema: fakeSchema,
    onSubmit: (values) => console.log(values),
  });

  console.log(formik.errors);

  return (
    <div>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              style={{ border: "1px solid blue" }}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
            />
          </div>

          {formik.errors.firstName && formik.touched["firstName"] && (
            <p>{formik.errors.firstName}</p>
          )}

          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              style={{ border: "1px solid blue" }}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && formik.touched["lastName"] && (
              <p>{formik.errors.lastName}</p>
            )}
          </div>
          <button type="submit">click</button>
        </form>
      </Container>
    </div>
  );
};

export default Favourite;
