import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";
export default function ContactPage() {
  return (
    <Fragment>
        <Head>
            <title>Contact Fluber</title>
            <meta name="description" content="Contact Fluber"/>
        </Head>
      <ContactForm />
    </Fragment>
  );
}
