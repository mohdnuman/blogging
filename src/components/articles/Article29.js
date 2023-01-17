import React, { Component } from "react";
import Container from "@mui/material/Container";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { Telegram, Twitter } from "@mui/icons-material";

class Article29 extends Component {
  render() {
    return (
      <div align="center">
        <Container
          maxWidth="md"
          sx={{ display: "inline-block", padding: "4vh", fontSize: "1.3rem" }}
        >
          <span className="articles-section-heading">ARTICLES</span>
          <h1 className="playfair-heading-lg">
            Imām 'Alī (عليه السلام‎) said regarding the Qur'ān
          </h1>
          <img
            src={"./article29.jpg"}
            alt="article29"
            className="image-main-page-article-4"
            sx={{ height: 10 }}
          />
          <div className="body-text">
            <p>
              The Book (i.e., The Qur'ān) was revealed to the Prophet Muhammad
              ﷺ, a light whose radiance will never be extinguished, and a lamp
              whose illumination will never be hidden, and an ocean whose depths
              will never be measured, and a clear way which will never lead
              astray; a light-source whose rays will never be darkened, and a
              means of discrimination whose clarity will never fade, and an
              explanation whose basis will be refuted, and a cure whose
              application will never cause illness; a source of power whose
              guardians will never be put to flight, and a source of truth whose
              followers will never be abandoned.
            </p>
            <p>
              Exalt yourselves with the Book of Allāh ﷻ, for surely it is a
              strong rope, and a clear light, and a beneficial cure, and a
              thirst-quenching source, and a protection for those who hold fast
              to it, and a source of freedom for those who cling to it.
            </p>
            <p>
              Know that this Qur'ān is a source of advice that never deceives,
              and a guide that never leads astray, and an informer that never
              lies.
            </p>
            <p>
              <b>
                Know that surely there is no more need for anyone after reading
                the Qur'ān, and no one more in need before reading the Qur'ān.
                So use it as a cure for your illnesses, for surely there is a
                cure in it for the greatest of illnesses{" "}
              </b>
              - which are infidelity and hypocrisy, and deception and confusion.
              So call on Allāh ﷻ by it, and turn to Him out of love for it, and
              do not call on His creation through it. Surely the worshippers do
              not turn to Allāh ﷻ by any other means comparable to it. Know that
              it is surely the best intercessor of all intercessors, and the
              most eloquent of witnesses to the truth. Surely whomever the
              Qur'ān intercedes for on the Day of Resurrection will have that
              intercession accepted, and whomever the Qur'ān testifies against
              on the Day of Resurrection will have that testimony verified.
            </p>
            <p>
              Nobody sits down with this Qur'ān without having experienced
              either an increase or a decrease when he stands up again: an
              increase in guidance, or a decrease in 'blindness'.
            </p>
            <p>
              <b>
                You can see by the Book of Allāh ﷻ, and you can speak by it, and
                you can hear by it. One part of it explains another part of it,
                and one part of it confirms another part of it.
              </b>{" "}
              It does not contradict itself about Allāh ﷻ, and it does not
              create contradictions between its companion and Allah ﷻ.
            </p>
            <p>
              The Book (i.e., The Qur'ān) is proof and argument enough for us. O
              people, heed what He ﷻ has sought of you to preserve of His Book,
              and what He ﷻ has sought to entrust to you of His rights. Surely
              Allāh ﷻ, may He be glorified, revealed this Book as a clear
              guidance about what is good and what is evil, so take the clear
              way of good, and you will be guided, and avoid the way of evil,
              and you will go straight to the truth.
            </p>
            <p>
              There are some words of hope in the Qur'ān for the one who wrongs
              himself which fills me with gladness. It says:
            </p>
            <p>
              قَالَ عَذَابِيْۤ اُصِيْبُ بِهٖ مَنْ اَشَآءُ ۚ وَرَحْمَتِيْ
              وَسِعَتْ كُلَّ شَيْءٍ ؕ
            </p>
            <p>
                <b>
              'My punishment falls upon whomever I wish, and My mercy
              encompasses all things.</b> [Sūrah Al-A'rāf 7:156]' So He ﷻ has made
              His mercy a general matter, and His punishment a particular
              matter.
            </p>
            <p>
              In the Qur'ān there is information about what there was before
              you, and there is news of what there will be after you, and there
              is wisdom to settle what is between you.
            </p>
            <p>
              The likeness of the believer (mu'min) who recites the Qur'ān is
              that of a citrus fruit, which has a sweet scent and a sweet taste;
              and the likeness of a believer who does not recite the Qur'ān is
              that of basil, which has a sweet scent but a bitter taste; and the
              likeness of a corrupt person who does not recite the Qur'ān is
              that of a desert gourd, whose taste is bitter and which smells of
              nothing.'
            </p>
            <p>
              Share it With Your Friends And Family
              <br />
              <br />
              <a
                className="black-color-a"
                href="whatsapp://send?text= https://www.exposingdajjal.com/article28"
                data-action="share/whatsapp/share"
                target="_blank"
                style={{ marginTop: "10vh", marginRight: "3vh" }}
              >
                <WhatsappIcon />
              </a>
              <a
                className="black-color-a"
                href="https://t.me/share/url?url= https://www.exposingdajjal.com/article28"
                style={{ marginTop: "10vh", marginRight: "3vh" }}
              >
                <Telegram />
              </a>
              <a
                href="https://twitter.com/share"
                class="black-color-a"
                data-text="Check out this article from Exposing Dajjal"
                data-url="https://www.exposingdajjal.com/article28"
                data-show-count="false"
              >
                <Twitter />
              </a>
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Article29;
