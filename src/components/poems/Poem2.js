import React, { Component } from "react";
import Container from "@mui/material/Container";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import { Telegram, Twitter } from "@mui/icons-material";

class Poem2 extends Component {
  render() {
    return (
      <div align="center">
        <Container
          maxWidth="md"
          sx={{ display: "inline-block", padding: "4vh", fontSize: "1.3rem" }}
        >
          <span className="articles-section-heading">POEMS</span>
          <h1 className="playfair-heading-lg">Spouse in the Qur’ān</h1>
          <img src={"./poem2.jpg"} alt="poem2" className="poem1-image" />
          <div className="body-text">
            <p>
              <b>
                For hope, I look up at the heavens
                <br />
                For tranquility, I look at you
              </b>
            </p>
            <p>For He says</p>
            <p>
              وَلَا تَايْـَٔسُوْا مِنْ رَّوْحِ اللّٰهِ And do not lose hope in
              the mercy of Allāh.
              <br /> Sūrah Yūsuf 12:87
            </p>
            <p>
              اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْۤا
              اِلَيْهَا <br />
              He created for you from yourselves spouses that you may find
              tranquility in them.
              <br /> Sūrah Ar-Rūm 30:21
            </p>
            <p>
              <b>
                Though the world knows about my fragility <br />
                Your protection is my responsibility
              </b>
            </p>
            <p>For He says</p>
            <p>
              وَخُلِقَ الْاِنْسَانُ ضَعِيْفًا <br />
              and mankind was created weak.
              <br />
              Sūrah An-Nisa' 4:28
            </p>
            <p>
              اَلرِّجَالُ قَوّٰمُوْنَ عَلَي النِّسَآءِ <br />
              Men are protectors of women
              <br /> Sūrah An-Nisa' 4:34
            </p>
            <p>
              <b>
                You are garb for me and I'm a clothing for you
                <br /> I've been instructed at every stage of my life to give
                you, your due
              </b>
            </p>
            <p>For He says</p>
            <p>
              هُنَّ لِبَاسٌ لَّكُمْ وَاَنْتُمْ لِبَاسٌ لَّهُنَّ <br />
              They are a clothing for you and you are a clothing for them.
              <br /> Sūrah Al-Baqarah 2:187
            </p>
            <p>
              وَاٰتُوا النِّسَآءَ صَدُقٰتِهِنَّ نِحْلَةً <br />
              And give the women their gifts graciously.
              <br /> Sūrah An-Nisa' 4:4
            </p>
            <p>
              <b>
                You are a container filled with mercy, a vessel filled with love
                <br />
                I'm being as good as I could to keep you for it's the condition
                from Above
              </b>
            </p>
            <p>For He says</p>
            <p>
              وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً <br />
              and He placed between you affection and mercy. Sūrah Ar-Rūm 30:21
            </p>
            <p>
              وَالطَّيِّبٰتُ لِلطَّيِّبِيْنَ <br />
              And good women are for good men, and good men are for good women.
              <br /> Sūrah An-Nūr 24:26
            </p>
            <p>
              <b>
                He decreed that you be a fruitful yield
                <br /> And there's no lie in what has been revealed
              </b>
            </p>
            <p>For He says</p>
            <p>
              نِسَآؤُكُمْ حَرْثٌ لَّكُمْ <br />
              Your wives are a place of cultivation
              <br />
              Sūrah Al-Baqarah 2:223
            </p>
            <p>
              وَمَنْ اَصْدَقُ مِنَ اللّٰهِ حَدِيْثًا <br />
              And who is more truthful than Allāh in statement.
              <br /> Sūrah An-Nisa' 4:87
            </p>
            <p>
              Share it With Your Friends And Family
              <br />
              <br />
              <a
                className="black-color-a"
                href="whatsapp://send?text= https://www.exposingdajjal.com/poem2"
                data-action="share/whatsapp/share"
                target="_blank"
                style={{ marginTop: "10vh", marginRight: "3vh" }}
              >
                <WhatsappIcon />
              </a>
              <a
                className="black-color-a"
                href="https://t.me/share/url?url= https://www.exposingdajjal.com/poem2"
                style={{ marginTop: "10vh", marginRight: "3vh" }}
              >
                <Telegram />
              </a>
              <a
                href="https://twitter.com/share"
                class="black-color-a"
                data-text="Check out this article from Exposing Dajjal"
                data-url="https://www.exposingdajjal.com/poem2"
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

export default Poem2;
