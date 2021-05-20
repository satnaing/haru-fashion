import Head from "next/head";
import FacebookLogo from "../../public/icons/FacebookLogo";
import InstagramLogo from "../../public/icons/InstagramLogo";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div>
          <h6 className={styles.footerHead}>COMPANY</h6>
          <div className={styles.column}>
            <a href="example">About Us</a>
            <a href="example">Contact Us</a>
            <a href="example">Store Location</a>
            <a href="example">Careers</a>
          </div>
        </div>
        <div>
          <h6 className={styles.footerHead}>HELP</h6>
          <div className={styles.column}>
            <a href="example">Order Tracking</a>
            <a href="example">FAQs</a>
            <a href="example">Privacy Policy</a>
            <a href="example">Terms & Conditions</a>
          </div>
        </div>
        <div>
          <h6 className={styles.footerHead}>STORE</h6>
          <div className={styles.column}>
            <a href="example">Women</a>
            <a href="example">Men</a>
            <a href="example">Bags</a>
          </div>
        </div>
        <div>
          <h6 className={styles.footerHead}>KEEP IN TOUCH</h6>
          <div className={styles.column}>
            <span>
              Ground Floor, Yadanar Road, <br />
              Malikha Building, Thingangyun, <br />
              Yangon
            </span>
            <span>+95 95 096 051</span>
            <span>
              Open All Days <br />
              9:00 AM ~ 11:00 PM
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-16">
        <h4 className="text-3xl mb-4">Newsletter</h4>
        <span className="px-6 text-center">
          Be the first to know about new arrivals, sales & promos!
        </span>
        <div className="mt-5 px-6 flex w-full sm:w-auto flex-col sm:flex-row">
          <Input name="email" type="email" extraClass=" w-full sm:w-auto" />{" "}
          <Button
            size="lg"
            value="Send"
            extraClass="ml-0 mt-4 sm:mt-0 tracking-widest sm:tracking-normal sm:mt-0 sm:ml-4 w-auto w-full sm:w-auto"
          />
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <span className="ml-6 sm:ml-12 md:ml-20">
          @2020 GOYA. All rights reserved.
        </span>
        <span className="flex items-center mr-6 sm:mr-12 md:mr-20">
          <span className="hidden sm:block">Follow us on Social Media:</span>{" "}
          <a href="www.facebook.com">
            <FacebookLogo />
          </a>
          <a href="www.ig.com">
            <InstagramLogo />
          </a>
        </span>
      </div>
    </>
  );
}
