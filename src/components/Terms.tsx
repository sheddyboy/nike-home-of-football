"use client";
import { motion } from "framer-motion";
import Link from "next/link";
interface TermsProps {
  height: string;
  closeClickEvent: () => void;
}

export default function Terms({ height, closeClickEvent }: TermsProps) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: height }}
      className="fixed bottom-0 flex flex-col gap-[15px]"
    >
      <svg
        className="mx-auto cursor-pointer"
        width="90"
        height="90"
        viewBox="0 0 90 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          closeClickEvent();
        }}
      >
        <circle cx="45" cy="45" r="44" stroke="black" strokeWidth="2" />
        <path
          d="M35 34L55 56"
          stroke="black"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M55 34L35 56"
          stroke="black"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
      <div className="relative h-[75vh] overflow-auto bg-white">
        <div className="flex flex-col px-[55px] pb-[80px] pt-[80px]">
          <h3 className="text-big-caps mx-auto mb-[100px]">
            TERMS & CONDITIONS
          </h3>
          <p className="text-sm-mix">
            <span className="text-sm-caps">TERMS OF SALE</span>
            <br />
            <br />
            THESE TERMS OF SALE GOVERN YOUR SHOPPING EXPERIENCE, INCLUDING
            PURCHASES OF NIKE PRODUCTS, FROM NIKE STORES (DEFINED BELOW)
            <br />
            IN THE UNITED STATES. IF YOU ARE PURCHASING NIKE PRODUCTS OUTSIDE
            THE UNITED STATES, YOUR PURCHASES ARE GOVERNED BY DIFFERENT TERMS.
            PLEASE REVIEW THE TERMS CAREFULLY BEFORE ORDERING PRODUCTS ONLINE OR
            OTHERWISE PURCHASING FROM THE NIKE STORE (AS DEFINED BELOW). PLEASE
            NOTE THAT YOUR USE OF AND ACCESS TO NIKE STORES (DEFINED BELOW) ARE
            SUBJECT TO THE FOLLOWING TERMS; BY SHOPPING IN ANY NIKE STORE OR
            PURCHASING ANY NIKE PRODUCT FROM NIKE IN THE UNITED STATES, YOU ARE
            ACCEPTING AND AGREEING TO BE BOUND BY THESE TERMS OF SALE. IF YOU DO
            NOT AGREE TO  THE TERMS, YOU MUST (A) DISCONTINUE USING OR SHOPPING
            IN OUR DIGITAL STORES AND DISCONTINUE VISITING OR SHOPPING IN OUR
            RETAIL STORES, (B) NOT MAKE A PURCHASE AND/OR (C) RETURN ANY
            ELIGIBLE PURCHASE WITHIN THE APPLICABLE RETURN WINDOW.
            <br />
            <br />
            You are SUBJECT to these TERMS AND MAY PURCHASE NIKE PRODUCTS if you
            are of legal age in your jurisdiction or if you have consent from
            your parent or guardian.
            <br />
            <br />
            <br />
            <span className="text-sm-caps">APPLICABILITY</span>
            <br />
            <br />
            These Terms of Sale (“Terms of Sale” or “Terms”) apply to your
            shopping, orders, purchases, and returns at NIKE-owned brick and
            mortar retail stores (each a “Retail Store”), and NIKE-owned digital
            stores that enable consumer purchases through NIKE.com, SNKRS or the
            NIKE app (each a “Digital Store”). Retail Stores and Digital Stores
            are collectively referred to in these Terms of Sale as “NIKE
            Stores”. These Terms of Sale create a legally binding agreement
            between you and NIKE Retail Services, Inc. (which we may refer to as
            “NIKE,” “we,” “us,” or “our”) with its headquarters and principal
            place of business at One Bowerman Drive, Beaverton, OR 97005, USA.
            NIKE may revise these Terms of Sale at any time.  The current Terms
            of Sale will be posted at NIKE.com.  The Terms of Sale posted at the
            time you purchase products at a NIKE Store will govern that
            purchase.  In addition to the Terms of Sale, by shopping and/or
            purchasing at any NIKE Store you acknowledge and agree to by bound
            by NIKE’s 
            <a
              href="http://agreementservice.svs.nike.com/us/en_us/rest/agreement?requestType=redirect&agreementType=termsOfUse&country=US&language=en&uxId=com.nike.commerce.nikedotcom.web"
              target="_blank"
            >
              Terms of Use
            </a>
             and 
            <a
              href="http://agreementservice.svs.nike.com/us/en_us/rest/agreement?requestType=redirect&agreementType=privacyPolicy&country=US&language=en&uxId=com.nike.commerce.nikedotcom.web"
              target="_blank"
            >
              Privacy Policy,
            </a>
             which are incorporated herein by this reference.
            <br />
            <br />
            <br />
            <span className="text-sm-caps">NO PURCHASE FOR RESALE</span>
            <br />
            <br /> NIKE Stores, including any consumer rights or policies
            offered in NIKE Stores, are intended solely for the benefit of end
            consumers, and therefore purchase of products for resale is strictly
            prohibited. Purchase for resale means the purchase of product by
            someone who intends to resell the product to others (consumers,
            businesses or any third party).  If NIKE determines that a purchase
            or order is intended for resale, NIKE reserves the right, in its
            sole discretion, and as it relates to such purchase or order, to (1)
            suspend the application of any NIKE policy that provides a right or
            benefit intended for direct to consumer purchases; and (2) take any
            action to hinder such purchase or order (and deter future purchases
            or orders), including without limitation, to restrict sales to any
            consumer, consumer account, or member account, cancel orders, charge
            restocking fees, impose purchase quantity limits, decline to issue
            refunds or take returns, deny access to any NIKE Store, and/or
            suspend or close any account.
            <br />
            <br />
            <br />
            <span className="text-sm-caps">
              HOW TO PURCHASE– DIGITAL STORES
            </span>
            <br />
            <br />
            To complete your purchase at a Digital Store, you must provide your
            full name, e-mail address, valid delivery address, and payment
            method to place an online order. You may need to adjust your device
            settings or set your browser to accept functional cookies and
            pop-ups in order to be able to use all the functionalities of a
            Digital Store, which includes designing customized items, adding
            items to your shopping bag and submitting your order.  When you
            submit an order, we will send an email acknowledging receipt of your
            order (“Order Confirmation”).  Our acceptance of your order takes
            place when the products are shipped to you; we will send a second
            email confirming that the products have been shipped. If we are
            unable to supply you with a product, we will inform you of this in
            writing and will not process the order for that product.  provide
            the products.
          </p>
        </div>
        <Link
          href="/success"
          className="text-big-caps sticky bottom-0 flex w-full justify-center rounded-t-[10px] bg-white py-[55px] shadow-custom-shadow"
        >
          Accept
        </Link>
      </div>
    </motion.div>
  );
}
