import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Gongpo",
  description: "Gongpo End User License Agreement",
};

export default function TermsOfUse() {
  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Terms of Use
          </h1>
          <h2 className="text-2xl font-semibold mb-2">
            END USER LICENSE AGREEMENT
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Last updated December 25, 2025
          </p>

          <div className="text-muted-foreground space-y-4 mb-8">
            <p>
              Gongpo is licensed to You (End-User) by Mapletask, located and
              registered at Dongsung APT, Sinnae-ro 128, Seoul, 02054, South
              Korea (&quot;Licensor&quot;), for use only under the terms of this
              License Agreement. Our VAT number is 550-26-01784.
            </p>
            <p>
              By downloading the Licensed Application from Apple&apos;s software
              distribution platform (&quot;App Store&quot;) and Google&apos;s
              software distribution platform (&quot;Play Store&quot;), and any
              update thereto (as permitted by this License Agreement), You
              indicate that You agree to be bound by all of the terms and
              conditions of this License Agreement, and that You accept this
              License Agreement. App Store and Play Store are referred to in
              this License Agreement as &quot;Services.&quot;
            </p>
            <p>
              The parties of this License Agreement acknowledge that the
              Services are not a Party to this License Agreement and are not
              bound by any provisions or obligations with regard to the Licensed
              Application, such as warranty, liability, maintenance and support
              thereof. Mapletask, not the Services, is solely responsible for
              the Licensed Application and the content thereof.
            </p>
            <p>
              This License Agreement may not provide for usage rules for the
              Licensed Application that are in conflict with the latest Apple
              Media Services Terms and Conditions and Google Play Terms of
              Service (&quot;Usage Rules&quot;). Mapletask acknowledges that it
              had the opportunity to review the Usage Rules and this License
              Agreement is not conflicting with them.
            </p>
            <p>
              Gongpo when purchased or downloaded through the Services, is
              licensed to You for use only under the terms of this License
              Agreement. The Licensor reserves all rights not expressly granted
              to You. Gongpo is to be used on devices that operate with
              Apple&apos;s operating systems (&quot;iOS&quot; and &quot;Mac
              OS&quot;) or Google&apos;s operating system (&quot;Android&quot;).
            </p>
          </div>

          <nav className="mb-8 p-4 bg-card/50 rounded-lg border">
            <h3 className="font-semibold mb-2">TABLE OF CONTENTS</h3>
            <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
              <li>THE APPLICATION</li>
              <li>SCOPE OF LICENSE</li>
              <li>TECHNICAL REQUIREMENTS</li>
              <li>MAINTENANCE AND SUPPORT</li>
              <li>USE OF DATA</li>
              <li>USER-GENERATED CONTRIBUTIONS</li>
              <li>USER-GENERATED CONTENT POLICY</li>
              <li>CONTRIBUTION LICENSE</li>
              <li>LIABILITY</li>
              <li>WARRANTY</li>
              <li>PRODUCT CLAIMS</li>
              <li>LEGAL COMPLIANCE</li>
              <li>CONTACT INFORMATION</li>
              <li>TERMINATION</li>
              <li>THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY</li>
              <li>INTELLECTUAL PROPERTY RIGHTS</li>
              <li>APPLICABLE LAW</li>
              <li>MISCELLANEOUS</li>
            </ol>
          </nav>

          <Section title="1. THE APPLICATION">
            <p>
              Gongpo (&quot;Licensed Application&quot;) is a piece of software
              created to provide a local-first note-taking and document
              collaboration platform where users can create, organize, and
              collaborate on documents within shared workspaces — and customized
              for iOS and Android mobile devices (&quot;Devices&quot;).
            </p>
            <p>
              It is used to create and manage personal notes, documents, and
              workspaces. Gongpo provides features such as rich text editing,
              real-time collaboration, workspace sharing, cloud synchronization,
              and offline-first functionality. Users can invite others to their
              workspaces to collaboratively edit documents in real-time.
            </p>
            <p>
              The Licensed Application is not tailored to comply with
              industry-specific regulations (Health Insurance Portability and
              Accountability Act (HIPAA), Federal Information Security
              Management Act (FISMA), etc.), so if your interactions would be
              subjected to such laws, you may not use this Licensed Application.
              You may not use the Licensed Application in a way that would
              violate the Gramm-Leach-Bliley Act (GLBA).
            </p>
          </Section>

          <Section title="2. SCOPE OF LICENSE">
            <p>
              2.1 You are given a non-transferable, non-exclusive,
              non-sublicensable license to install and use the Licensed
              Application on any Devices that You (End-User) own or control and
              as permitted by the Usage Rules, with the exception that such
              Licensed Application may be accessed and used by other accounts
              associated with You (End-User, The Purchaser) via Family Sharing
              or volume purchasing.
            </p>
            <p>
              2.2 This license will also govern any updates of the Licensed
              Application provided by Licensor that replace, repair, and/or
              supplement the first Licensed Application, unless a separate
              license is provided for such update, in which case the terms of
              that new license will govern.
            </p>
            <p>
              2.3 You may not share or make the Licensed Application available
              to third parties (unless to the degree allowed by the Usage Rules,
              and with Mapletask&apos;s prior written consent), sell, rent,
              lend, lease or otherwise redistribute the Licensed Application.
            </p>
            <p>
              2.4 You may not reverse engineer, translate, disassemble,
              integrate, decompile, remove, modify, combine, create derivative
              works or updates of, adapt, or attempt to derive the source code
              of the Licensed Application, or any part thereof (except with
              Mapletask&apos;s prior written consent).
            </p>
            <p>
              2.5 You may not copy (excluding when expressly authorized by this
              license and the Usage Rules) or alter the Licensed Application or
              portions thereof. You may create and store copies only on devices
              that You own or control for backup keeping under the terms of this
              license, the Usage Rules, and any other terms and conditions that
              apply to the device or software used. You may not remove any
              intellectual property notices. You acknowledge that no
              unauthorized third parties may gain access to these copies at any
              time. If you sell your Devices to a third party, you must remove
              the Licensed Application from the Devices before doing so.
            </p>
            <p>
              2.6 Violations of the obligations mentioned above, as well as the
              attempt of such infringement, may be subject to prosecution and
              damages.
            </p>
            <p>
              2.7 Licensor reserves the right to modify the terms and conditions
              of licensing.
            </p>
            <p>
              2.8 Nothing in this license should be interpreted to restrict
              third-party terms. When using the Licensed Application, You must
              ensure that You comply with applicable third-party terms and
              conditions.
            </p>
          </Section>

          <Section title="3. TECHNICAL REQUIREMENTS">
            <p>
              3.1 The Licensed Application requires iOS 14.0 or higher for Apple
              devices, and Android 8.0 (API level 26) or higher for Android
              devices. Licensor recommends using the latest version of the
              operating system.
            </p>
            <p>
              3.2 Licensor attempts to keep the Licensed Application updated so
              that it complies with modified/new versions of the firmware and
              new hardware. You are not granted rights to claim such an update.
            </p>
            <p>
              3.3 You acknowledge that it is Your responsibility to confirm and
              determine that the app end-user device on which You intend to use
              the Licensed Application satisfies the technical specifications
              mentioned above.
            </p>
            <p>
              3.4 Licensor reserves the right to modify the technical
              specifications as it sees appropriate at any time.
            </p>
          </Section>

          <Section title="4. MAINTENANCE AND SUPPORT">
            <p>
              4.1 The Licensor is solely responsible for providing any
              maintenance and support services for this Licensed Application.
              You can reach the Licensor at the email address listed in the App
              Store or Play Store Overview for this Licensed Application.
            </p>
            <p>
              4.2 Mapletask and the End-User acknowledge that the Services have
              no obligation whatsoever to furnish any maintenance and support
              services with respect to the Licensed Application.
            </p>
          </Section>

          <Section title="5. USE OF DATA">
            <p>
              You acknowledge that Licensor will be able to access and adjust
              Your downloaded Licensed Application content and Your personal
              information, and that Licensor&apos;s use of such material and
              information is subject to Your legal agreements with Licensor and
              Licensor&apos;s privacy policy, which can be accessed by App -
              Settings - Privacy Policy.
            </p>
            <p>
              You acknowledge that the Licensor may periodically collect and use
              technical data and related information about your device, system,
              and application software, and peripherals, offer product support,
              facilitate the software updates, and for purposes of providing
              other services to you (if any) related to the Licensed
              Application. Licensor may also use this information to improve its
              products or to provide services or technologies to you, as long as
              it is in a form that does not personally identify you.
            </p>
          </Section>

          <Section title="6. USER-GENERATED CONTRIBUTIONS">
            <p>
              The Licensed Application may invite you to create, contribute to,
              or participate in shared workspaces and collaborative documents,
              and may provide you with the opportunity to create, submit, post,
              display, transmit, publish, distribute, or share content and
              materials to us or in the Licensed Application, including but not
              limited to text, writings, images, graphics, comments, or other
              material (collectively, &quot;Contributions&quot;). Contributions
              may be viewable by other users who have access to your shared
              workspaces. As such, any Contributions you transmit may be treated
              as non-confidential and non-proprietary within those shared
              contexts.
            </p>
            <p>
              When you create or make available any Contributions, you thereby
              represent and warrant that:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                The creation, distribution, transmission, public display, or
                performance, and the accessing, downloading, or copying of your
                Contributions do not and will not infringe the proprietary
                rights, including but not limited to the copyright, patent,
                trademark, trade secret, or moral rights of any third party.
              </li>
              <li>
                You are the creator and owner of or have the necessary licenses,
                rights, consents, releases, and permissions to use and to
                authorize us, the Licensed Application, and other users of the
                Licensed Application to use your Contributions in any manner
                contemplated by the Licensed Application and this License
                Agreement.
              </li>
              <li>
                You have the written consent, release, and/or permission of each
                and every identifiable individual person in your Contributions
                to use the name or likeness or each and every such identifiable
                individual person to enable inclusion and use of your
                Contributions in any manner contemplated by the Licensed
                Application and this License Agreement.
              </li>
              <li>Your Contributions are not false, inaccurate, or misleading.</li>
              <li>
                Your Contributions are not unsolicited or unauthorized
                advertising, promotional materials, pyramid schemes, chain
                letters, spam, mass mailings, or other forms of solicitation.
              </li>
              <li>
                Your Contributions are not obscene, lewd, lascivious, filthy,
                violent, harassing, libelous, slanderous, or otherwise
                objectionable (as determined by us).
              </li>
              <li>
                Your Contributions do not ridicule, mock, disparage, intimidate,
                or abuse anyone.
              </li>
              <li>
                Your Contributions are not used to harass or threaten (in the
                legal sense of those terms) any other person and to promote
                violence against a specific person or class of people.
              </li>
              <li>
                Your Contributions do not violate any applicable law,
                regulation, or rule.
              </li>
              <li>
                Your Contributions do not violate the privacy or publicity
                rights of any third party.
              </li>
              <li>
                Your Contributions do not violate any applicable law concerning
                child pornography, or otherwise intended to protect the health
                or well-being of minors.
              </li>
              <li>
                Your Contributions do not include any offensive comments that
                are connected to race, national origin, gender, sexual
                preference, or physical handicap.
              </li>
              <li>
                Your Contributions do not otherwise violate, or link to material
                that violates, any provision of this License Agreement, or any
                applicable law or regulation.
              </li>
            </ol>
            <p>
              Any use of the Licensed Application in violation of the foregoing
              violates this License Agreement and may result in, among other
              things, termination or suspension of your rights to use the
              Licensed Application.
            </p>
          </Section>

          <Section title="7. USER-GENERATED CONTENT POLICY">
            <p>
              <strong>7.1 PROHIBITED CONTENT</strong> You agree not to post,
              upload, or share any content that: (a) is unlawful, harmful,
              threatening, abusive, harassing, tortious, defamatory, vulgar,
              obscene, libelous, invasive of another&apos;s privacy, hateful, or
              racially, ethnically, or otherwise objectionable; (b) promotes
              discrimination, bigotry, racism, hatred, harassment, or harm
              against any individual or group; (c) is violent or threatening or
              promotes violence or actions that are threatening to any person or
              entity; (d) promotes illegal activities or conduct that is
              abusive, threatening, obscene, defamatory, or libelous; (e)
              infringes upon or violates any third-party&apos;s rights,
              including, but not limited to, intellectual property rights,
              rights of privacy, including unauthorized disclosure of a
              person&apos;s name, email address, physical address, or phone
              number, and rights of publicity; (f) contains software viruses or
              any other computer code, files, or programs designed to interrupt,
              destroy, or limit the functionality of any computer software,
              hardware, or telecommunications equipment; (g) constitutes
              unauthorized or unsolicited advertising, junk or bulk email (also
              known as &quot;spamming&quot;), chain letters, or any other form
              of unauthorized solicitation; (h) contains medical or
              health-related information that would be unlawful or unethical to
              share; or (i) impersonates any person or entity, including any of
              our employees or representatives.
            </p>
            <p>
              <strong>7.2 ENFORCEMENT POLICY</strong> We have a zero-tolerance
              policy regarding objectionable content or abusive users. We
              reserve the right to: (a) remove any content that violates this
              Agreement or is otherwise objectionable in our sole discretion,
              within 24 hours of being notified of such content; (b) terminate
              or suspend access to our Services for any user who violates this
              Agreement; (c) monitor, edit, or disclose any content on the
              Services; and (d) cooperate with any law enforcement authorities
              or court order requesting or directing us to disclose the identity
              or other information of anyone posting any content on or through
              the Services.
            </p>
            <p>
              <strong>7.3 CONTENT MONITORING AND REPORTING</strong> (a) You
              understand that all content posted on, transmitted through, or
              linked from the Services, are the sole responsibility of the
              person from whom such content originated. (b) We provide users
              with the ability to report objectionable content. If you encounter
              content that you believe violates these terms, please report it
              immediately using the in-app reporting feature. (c) You also have
              the ability to block users whose content or behavior you find
              objectionable. (d) We will review and act upon properly reported
              violations within 24 hours.
            </p>
            <p>
              <strong>7.4 USER RESPONSIBILITY</strong> You are entirely
              responsible for all content that you upload, post, email,
              transmit, or otherwise make available via the Licensed
              Application. Mapletask does not control the content posted via the
              Licensed Application and, as such, does not guarantee the
              accuracy, integrity, or quality of such content.
            </p>
          </Section>

          <Section title="8. CONTRIBUTION LICENSE">
            <p>
              By posting your Contributions to any part of the Licensed
              Application or making Contributions accessible to the Licensed
              Application by linking your account from the Licensed Application
              to any of your social networking accounts, you automatically
              grant, and you represent and warrant that you have the right to
              grant, to us an unrestricted, unlimited, irrevocable, perpetual,
              non-exclusive, transferable, royalty-free, fully-paid, worldwide
              right, and license to host, use copy, reproduce, disclose, sell,
              resell, publish, broadcast, retitle, archive, store, cache,
              publicly display, reformat, translate, transmit, excerpt (in whole
              or in part), and distribute such Contributions (including, without
              limitation, your image and voice) for any purpose, commercial
              advertising, or otherwise, and to prepare derivative works of, or
              incorporate in other works, such as Contributions, and grant and
              authorize sublicenses of the foregoing. The use and distribution
              may occur in any media formats and through any media channels.
            </p>
            <p>
              This license will apply to any form, media, or technology now
              known or hereafter developed, and includes our use of your name,
              company name, and franchise name, as applicable, and any of the
              trademarks, service marks, trade names, logos, and personal and
              commercial images you provide. You waive all moral rights in your
              Contributions, and you warrant that moral rights have not
              otherwise been asserted in your Contributions.
            </p>
            <p>
              We do not assert any ownership over your Contributions. You retain
              full ownership of all of your Contributions and any intellectual
              property rights or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              in the Licensed Application. You are solely responsible for your
              Contributions to the Licensed Application and you expressly agree
              to exonerate us from any and all responsibility and to refrain
              from any legal action against us regarding your Contributions.
            </p>
            <p>
              We have the right, in our sole and absolute discretion, (1) to
              edit, redact, or otherwise change any Contributions; (2) to
              recategorize any Contributions to place them in more appropriate
              locations in the Licensed Application; and (3) to prescreen or
              delete any Contributions at any time and for any reason, without
              notice. We have no obligation to monitor your Contributions.
            </p>
          </Section>

          <Section title="9. LIABILITY">
            <p>
              9.1 Licensor&apos;s responsibility in the case of violation of
              obligations and tort shall be limited to intent and gross
              negligence. Only in case of a breach of essential contractual
              duties (cardinal obligations), Licensor shall also be liable in
              case of slight negligence. In any case, liability shall be limited
              to the foreseeable, contractually typical damages. The limitation
              mentioned above does not apply to injuries to life, limb, or
              health.
            </p>
            <p>
              9.2 Licensor takes no accountability or responsibility for any
              damages caused due to a breach of duties according to Section 2 of
              this License Agreement. To avoid data loss, You are required to
              make use of backup functions of the Licensed Application to the
              extent allowed by applicable third-party terms and conditions of
              use. You are aware that in case of alterations or manipulations of
              the Licensed Application, You will not have access to the Licensed
              Application.
            </p>
          </Section>

          <Section title="10. WARRANTY">
            <p>
              10.1 Licensor warrants that the Licensed Application is free of
              spyware, trojan horses, viruses, or any other malware at the time
              of Your download. Licensor warrants that the Licensed Application
              works as described in the user documentation.
            </p>
            <p>
              10.2 No warranty is provided for the Licensed Application that is
              not executable on the device, that has been unauthorizedly
              modified, handled inappropriately or culpably, combined or
              installed with inappropriate hardware or software, used with
              inappropriate accessories, regardless if by Yourself or by third
              parties, or if there are any other reasons outside of
              Mapletask&apos;s sphere of influence that affect the executability
              of the Licensed Application.
            </p>
            <p>
              10.3 You are required to inspect the Licensed Application
              immediately after installing it and notify Mapletask about issues
              discovered without delay by email provided in Contact Information.
              The defect report will be taken into consideration and further
              investigated if it has been emailed within a period of fourteen
              (14) days after discovery.
            </p>
            <p>
              10.4 If we confirm that the Licensed Application is defective,
              Mapletask reserves a choice to remedy the situation either by
              means of solving the defect or substitute delivery.
            </p>
            <p>
              10.5 In the event of any failure of the Licensed Application to
              conform to any applicable warranty, You may notify the Services
              Store Operator, and Your Licensed Application purchase price will
              be refunded to You. To the maximum extent permitted by applicable
              law, the Services Store Operator will have no other warranty
              obligation whatsoever with respect to the Licensed Application,
              and any other losses, claims, damages, liabilities, expenses, and
              costs attributable to any negligence to adhere to any warranty.
            </p>
            <p>
              10.6 If the user is an entrepreneur, any claim based on faults
              expires after a statutory period of limitation amounting to twelve
              (12) months after the Licensed Application was made available to
              the user. The statutory periods of limitation given by law apply
              for users who are consumers.
            </p>
          </Section>

          <Section title="11. PRODUCT CLAIMS">
            <p>
              Mapletask and the End-User acknowledge that Mapletask, and not the
              Services, is responsible for addressing any claims of the End-User
              or any third party relating to the Licensed Application or the
              End-User&apos;s possession and/or use of that Licensed
              Application, including, but not limited to:
            </p>
            <p>
              (i) product liability claims; (ii) any claim that the Licensed
              Application fails to conform to any applicable legal or regulatory
              requirement; and (iii) claims arising under consumer protection,
              privacy, or similar legislation.
            </p>
          </Section>

          <Section title="12. LEGAL COMPLIANCE">
            <p>
              You represent and warrant that You are not located in a country
              that is subject to a US Government embargo, or that has been
              designated by the US Government as a &quot;terrorist
              supporting&quot; country; and that You are not listed on any US
              Government list of prohibited or restricted parties.
            </p>
          </Section>

          <Section title="13. CONTACT INFORMATION">
            <p>
              For general inquiries, complaints, questions or claims concerning
              the Licensed Application, please contact:
            </p>
            <address className="not-italic">
              Jaeha Lee
              <br />
              Dongsung APT, Sinnae-ro 128
              <br />
              Seoul, 02054
              <br />
              South Korea
              <br />
              <a
                href="mailto:gongpoapp@gmail.com"
                className="text-primary hover:underline"
              >
                gongpoapp@gmail.com
              </a>
            </address>
          </Section>

          <Section title="14. TERMINATION">
            <p>
              The license is valid until terminated by Mapletask or by You. Your
              rights under this license will terminate automatically and without
              notice from Mapletask if You fail to adhere to any term(s) of this
              license. Upon License termination, You shall stop all use of the
              Licensed Application, and destroy all copies, full or partial, of
              the Licensed Application.
            </p>
          </Section>

          <Section title="15. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY">
            <p>
              Mapletask represents and warrants that Mapletask will comply with
              applicable third-party terms of agreement when using Licensed
              Application.
            </p>
            <p>
              In Accordance with Section 9 of the &quot;Instructions for Minimum
              Terms of Developer&apos;s End-User License Agreement,&quot; both
              Apple and Google and their subsidiaries shall be third-party
              beneficiaries of this End User License Agreement and — upon Your
              acceptance of the terms and conditions of this License Agreement,
              both Apple and Google will have the right (and will be deemed to
              have accepted the right) to enforce this End User License
              Agreement against You as a third-party beneficiary thereof.
            </p>
          </Section>

          <Section title="16. INTELLECTUAL PROPERTY RIGHTS">
            <p>
              Mapletask and the End-User acknowledge that, in the event of any
              third-party claim that the Licensed Application or the
              End-User&apos;s possession and use of that Licensed Application
              infringes on the third party&apos;s intellectual property rights,
              Mapletask, and not the Services, will be solely responsible for
              the investigation, defense, settlement, and discharge or any such
              intellectual property infringement claims.
            </p>
          </Section>

          <Section title="17. APPLICABLE LAW">
            <p>
              This License Agreement is governed by the laws of South Korea
              excluding its conflicts of law rules.
            </p>
          </Section>

          <Section title="18. MISCELLANEOUS">
            <p>
              18.1 If any of the terms of this agreement should be or become
              invalid, the validity of the remaining provisions shall not be
              affected. Invalid terms will be replaced by valid ones formulated
              in a way that will achieve the primary purpose.
            </p>
            <p>
              18.2 Collateral agreements, changes and amendments are only valid
              if laid down in writing. The preceding clause can only be waived
              in writing.
            </p>
          </Section>
        </article>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="text-muted-foreground space-y-4">{children}</div>
    </section>
  );
}
