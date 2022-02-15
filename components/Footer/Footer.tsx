import Link from "next/link";
import { useTranslations } from "next-intl";

import FacebookLogo from "../../public/icons/FacebookLogo";
import InstagramLogo from "../../public/icons/InstagramLogo";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Navigation");

  return (
    <>
      <div className={styles.footerContainer}>
        <div>
          <h6 className={styles.footerHead}>{t("company")}</h6>
          <div className={styles.column}>
            <a href="example">{t("about_us")}</a>
            <a href="example">{t("contact_us")}</a>
            <a href="example">{t("store_location")}</a>
            <a href="example">{t("careers")}</a>
          </div>
        </div>
        <div>
          <h6 className={styles.footerHead}>{t("help")}</h6>
          <div className={styles.column}>
            <a href="example">{t("order_tracking")}</a>
            <a href="example">{t("faqs")}</a>
            <a href="example">{t("privacy_policy")}</a>
            <a href="example">{t("terms_conditions")}</a>
          </div>
        </div>
        <div>
          <h6 className={styles.footerHead}>{t("store")}</h6>
          <div className={styles.column}>
            <Link href={`/product-category/women`}>
              <a>{t("women")}</a>
            </Link>
            <Link href={`/product-category/men`}>
              <a>{t("men")}</a>
            </Link>
            <Link href={`/product-category/bags`}>
              <a>{t("bags")}</a>
            </Link>
          </div>
        </div>
        <div>
          <h6 className={styles.footerHead}>{t("keep_in_touch")}</h6>
          <div className={styles.column}>
            <span>
              {t("address.detail")}
              <br />
              {t("address.road")}
              <br />
              {t("address.city")}
            </span>
            <span>{t("phone_number")}</span>
            <span>
              {t("open_all_days")} <br />- {t("opening_hours")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-16">
        <h4 className="text-3xl mb-4">{t("newsletter")}</h4>
        <span className="px-6 text-center">{t("newsletter_desc")}</span>
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
          @2022 Haru. {t("all_rights_reserved")}
        </span>
        <span className="flex items-center mr-6 sm:mr-12 md:mr-20">
          <span className="hidden sm:block">
            {t("follow_us_on_social_media")}:
          </span>{" "}
          <a
            href="www.facebook.com"
            aria-label="Facebook Page for Haru Fashion"
          >
            <FacebookLogo />
          </a>
          <a href="www.ig.com" aria-label="Instagram Account for Haru Fashion">
            <InstagramLogo />
          </a>
        </span>
      </div>
    </>
  );
}
