"use client";
import { FormCtx } from "@/context/form/FormProvider";
import { motion } from "framer-motion";
import Link from "next/link";
import { useContext } from "react";
interface TermsProps {
  height: string;
  closeClickEvent: () => void;
}

export default function Terms({ height, closeClickEvent }: TermsProps) {
  const { state } = useContext(FormCtx);
  const {
    language: { en },
  } = state;
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: height }}
      className="fixed bottom-0 left-0 flex flex-col gap-[15px]"
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
            NIKE EVENT DECLARATION OF CONSENT
          </h3>
          <p className="text-sm-mix">
            <span className="uppercase">
              This agreement (the &quot;Consent Form&quot;) conﬁrms the terms
              and conditions that apply to the participation in the Event by you
              or your child (if under the age of 18) (the
              &quot;Participant&quot;).
            </span>
            <br />
            <br />
            <span className="text-sm-caps">CONDITIONS</span>
            <br />
            <br />
            1. NIKE RETAIL B.V. or any other member of the &quot;NIKE
            Group&quot; (i.e., Nike Inc., NIKE, its subsidiaries, any entity or
            company to which NIKE or any of its subsidiaries licenses rights or
            provides services, and/or any entity that is its parent or
            subsidiary with respect to such entity) is sponsoring, producing,
            directing, organizing, paying for or conducting the Event described
            in the registration associated with this Consent Form (the
            &quot;Event&quot;) in which I wish to participate. In consideration
            for the opportunity to participate in the Event, I (or my parent or
            guardian if I am under 18 years of age) agree to the terms and
            conditions set forth in this Consent Form. Participants in the Event
            assume all risks associated with participation by agreeing to this
            Consent Form.
            <br />
            <br />
            2. ASSUMPTION OF RISK. NIKE has made no representations to me
            regarding the suitability, condition or safety of the Event or the
            venue, and I acknowledge that participation in the Event may involve
            risks and hazards of accidents, personal injury, bodily injury and
            loss of or damage to property. These risks may arise from my own
            actions or omissions as well as the actions or omissions of others,
            the rules of the game and the condition of the facilities and
            equipment. In addition, there may be other risks of which I am not
            aware and which I cannot foresee at this time. I have considered the
            nature and extent of the risks involved, have examined and satisﬁed
            myself as to the facilities and equipment, and I voluntarily choose
            to accept the risks associated with the Event.
            <br />
            <br />
            3. RELEASE OF LIABILITY. I, for myself and on behalf of my heirs,
            executors, asset managers, administrators, insurers, successors and
            assigns, hereby release NIKE and its parents, aﬃliates and
            subsidiaries, their respective oﬃcers, directors/managers,
            shareholders, employees, agents, representatives, contractors,
            successors, assigns and insurers, and the sponsors, organizers,
            advertisers, volunteers and employees of the Event, and any owners
            or lessors of premises used in connection with the Event
            (collectively, the &quot;Released Parties&quot;), fully and forever
            from any and all liability, claims, causes of action, costs, damages
            or legal proceedings arising out of or in connection with my
            participation in the Event (other than my death or personal injury
            due to the negligence of the Released Parties to the extent not
            precluded by applicable law).
            <br />
            <br />
            4. INDEMNIFICATION. I irrevocably and unconditionally agree to
            indemnify and hold harmless the Released Parties to the fullest
            extent permitted by law from any losses, claims, costs, damages or
            expenses (including reasonable attorneys&apos; fees) arising in
            connection with any accidents or damages resulting from my presence
            at and/or participation in the Event.
            <br />
            <br />
            5. NO INSURANCE. I understand that NIKE and others involved in the
            Event will not provide me with any insurance, whether life, health
            or liability, for any illness, accident, injury or damage that may
            occur in connection with my participation in the Event. If I desire
            any type of insurance, I must insure myself.
            <br />
            <br />
            6. MEDICAL CARE. I assume my own costs for medical emergencies and
            all other medical costs in the Event of illness, accident or injury
            in connection with the Event. I further certify that I am in good
            health and have no known pre-existing medical conditions or injuries
            that would pose a risk to me while participating in the Event. If I
            have any such pre-existing conditions or injuries, I agree to notify
            NIKE in writing prior to participating in the Event so that NIKE can
            determine whether I may participate (at NIKE&apos;s discretion).
            <br />
            <br />
            7. PERMISSION TO RECORD AND USE RECORDINGS AND NAMES. I consent to
            NIKE photographing and/or ﬁlming me during my participation and
            attendance at the Event. I hereby grant NIKE, its aﬃliates,
            subsidiaries, successors, assigns and licensees permission to ﬁlm,
            photograph, videotape or otherwise record my image, voice or any
            other aspect of the recording at the Event (collectively, the
            &quot;Recording&quot;). I consent to the worldwide, unrestricted use
            of the Recording and my name or likeness by NIKE in any manner and
            in any medium (whether known or unknown uses) and for any purpose
            without additional consideration. I agree that NIKE is under no
            obligation to use the Recordings and rights granted by me. I
            represent that it is not necessary for NIKE to obtain the consent of
            any third party or pay any third party for use in connection with
            the rights and consents granted under this section.
            <br />
            <br />
            8. LICENSE TO USE COMMENTS, FEEDBACK AND IDEAS I hereby grant NIKE
            and its aﬃliates and subsidiaries a perpetual, royalty-free license
            to use any comments, feedback and ideas I share with them, without
            notice, compensation or attribution to me, for any purpose
            whatsoever, including developing, manufacturing and marketing
            products and services, and developing, modifying or improving
            products and services. Mandatory statutory claims for participation
            in the commercial use of the aforementioned content remain
            unaﬀected.
            <br />
            <br />
            9. PHYSICAL FITNESS. I agree that I undertake to participate in the
            Event as safely as possible and in particular to abide by the rules
            of the Event, to follow the safety information and instructions
            provided to me, to take reasonable care to avoid dangerous
            situations and to be considerate of myself and other participants. I
            also understand that failure to comply with these rules may result
            in the loss of my eligibility to participate in future similar
            Events. I conﬁrm that the equipment (if any) I will be using for the
            Event is in good condition, properly maintained and suitable for the
            Event. I conﬁrm that I have the level of skill, ﬁtness and stamina
            required for the Event.
            <br />
            <br />
            10. PROTECTIVE EQUIPMENT. Unless otherwise instructed by NIKE, I
            acknowledge that I am responsible for obtaining and wearing
            appropriate equipment, clothing and personal protective equipment at
            all times while participating in the Event. If I fail or refuse to
            wear personal protective equipment, participation in the Event is at
            my own risk and, to the extent permitted by law, NIKE assumes no
            responsibility or liability for any loss, damage or injury I may
            suﬀer as a result of my failure or refusal to use protective
            equipment. I acknowledge that if I have been instructed to wear
            personal protective equipment and I fail to comply with this
            request, NIKE may, in its sole discretion, decide whether to allow
            me to participate in the Event.
            <br />
            <br />
            11. EXCLUSION FROM THE EVENT. I acknowledge that (i) NIKE may refuse
            to allow me to participate in the Event or cancel my participation
            at any time if I do not comply with this Consent Form or the
            instructions of NIKE representatives at the Event; (ii) my
            participation in the Event is not transferable to another person and
            cannot be exchanged for cash; and (iii) NIKE expects that I will be
            able to participate with other attendees in a safe and peaceful
            manner and that NIKE will not tolerate physical violence, verbal
            abuse, racial slurs, discrimination, harassment, hate speech or
            damage to property and that NIKE may refuse my participation or
            terminate my participation in the Event if I engage in such
            behavior. I acknowledge that my participation in the Event cannot be
            transferred to another person and cannot be exchanged for money.
            <br />
            <br />
            12. CHANGES OR CANCELLATION OF THE EVENT. NIKE reserves the right to
            change the date of the Event or make any other changes to the Event
            that NIKE deems necessary. NIKE is under no obligation to hold the
            Event and may cancel the Event for any reason. NIKE will not be
            responsible for any damages, expenses or costs incurred as a result
            of the change or cancellation of the Event, including travel and
            accommodation costs.
            <br />
            <br />
            13. COVID-19 I accept and acknowledge that NIKE may implement
            policies and/or measures to reduce the risk of transmission of
            COVID-19, but that it is not possible to completely eliminate this
            risk. I assume and agree to assume the risk of illness or death
            related to COVID-19 as a result of my participation in the Event (on
            my own behalf and on behalf of my, heirs, executors, custodian,
            administrators, insurers, successors and assigns), that I hereby
            fully and forever release and discharge the Released Parties from
            any and all liability, claims, causes of action, costs, losses,
            damages or proceedings arising out of or in connection with my
            participation (except for my death or personal injury due to the
            negligence of the Released Parties to the extent that this cannot be
            excluded by applicable law).
            <br />
            <br />
            14. ASSIGNMENT OF RIGHTS. I agree that NIKE may, in its sole
            discretion, assign the rights granted to it to third parties.
            <br />
            <br />
            15 SEVERABILITY CLAUSE If any part of this Consent Form is held
            invalid or unenforceable, all other provisions shall remain valid
            and enforceable. This Consent Form supersedes any oral or written
            representations made by or to me in connection with the Event. I
            understand that I may not terminate, cancel or revoke this Consent
            Form for any reason.
            <br />
            <br />
            16. APPLICABLE LAW. This Consent Form and all disputes or claims
            arising out of it, its subject matter or its formation (including
            non-contractual disputes or claims) shall be governed by the laws of
            the Participant&apos;s domicile. PRIVACY POLICY For the purposes of
            this Consent Form, the data controller is NIKE. By completing the
            Consent Form and participating in the Event, you are providing NIKE
            with certain personal data, including your image, contact details
            and personal data in connection with the Event. By completing the
            Consent Form and checking the box indicating that you agree to this
            Privacy Policy, you consent to NIKE processing your personal data.
            NIKE processes the personal data in order to administer the Event
            and to use the recorded footage on its platforms, as well as to
            handle inquiries and other follow-up matters after the Event. NIKE
            may share your personal data with third parties to process the data
            on NIKE&apos;s behalf. If NIKE engages third parties to process
            data, NIKE will require them to take appropriate measures to protect
            your personal data. NIKE may transfer or store the personal data
            collected and processed in the context of the Event outside the EEA
            and Switzerland. In this case, NIKE will ensure that your personal
            data transferred to these countries is adequately protected in
            accordance with the applicable data protection regulations. NIKE
            will always process your personal data in accordance with the
            applicable data protection regulations. For more detailed
            information on how NIKE processes your personal data and your
            rights, please refer to the NIKE Privacy Policy, available at
            Privacy Policy. To exercise your rights of access, deletion or
            correction, please use the web form. If you have speciﬁc questions
            about the processing of personal data, please contact the data
            protection team by email at privacy@nike.com.
          </p>
        </div>
        <button
          type="submit"
          className="text-big-caps sticky bottom-0 flex w-full justify-center rounded-t-[10px] bg-white py-[55px] shadow-custom-shadow"
        >
          {en ? "Accept" : "Akzeptieren"}
        </button>
      </div>
    </motion.div>
  );
}
