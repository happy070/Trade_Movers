import React from "react";
import MyNavbar from "./MyNavbar";
import { Card, CardBody, Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

const Gallery = () => {
  const imagevar = [
    "https://i.postimg.cc/qByhJPX7/jute-bag-3.png",
    " https://i.postimg.cc/XJFJv55P/jutebag-2-back.png",
    "https://i.postimg.cc/gkKxR37F/keychain-1.png",
    " https://i.postimg.cc/hGXvH6tc/keychain-85.png",
    "https://i.postimg.cc/25gymG1v/mug-5.png",
    " https://i.postimg.cc/L86nVndq/pen.png",
    " https://i.postimg.cc/J4Rn1GzT/sweetas-gift-box.png",
    " https://i.postimg.cc/Kj2Y3Yr8/trophy.png",
    " https://i.postimg.cc/J05zNWPc/tshirt-6.png",
    "  https://i.postimg.cc/XNfqSw4G/umreballa.png",
    "  https://i.postimg.cc/HL5J91qJ/Whats-App-Image-2023-07-03-at-10-53-30-1.png",
    "  https://i.postimg.cc/cHLvytK3/badge-5.png",
    "  https://i.postimg.cc/25w1K75m/badge-5-back.png",
    "  https://i.postimg.cc/zB2VJDWc/badges.png",
    "  https://i.postimg.cc/tJLJxrBd/band.png",
    "  https://i.postimg.cc/jq9Lm5RW/bottle-3.png",
    "  https://i.postimg.cc/qvHgB5h4/bottle-4.png",
    "  https://i.postimg.cc/MTHprk4b/bottle-5.png",
    "  https://i.postimg.cc/MGWTVfmL/bottle-copper.png",
    "  https://i.postimg.cc/pdqdZV0L/bottle-hsh.png",
    "  https://i.postimg.cc/sxZDsY3M/bottleas854.png",
    "  https://i.postimg.cc/4nk4dY3B/certificate.png",
    "  https://i.postimg.cc/mZcQtKDH/coin-back.png",
    "  https://i.postimg.cc/KvBB5Ltc/dairy-8.png",
    "  https://i.postimg.cc/HWfb53cP/dairy-844.png",
    "  https://i.postimg.cc/ryhSmMMc/dairy-854.png",
    " https://i.postimg.cc/pLj8qj8X/dairy44.png",
    "  https://i.postimg.cc/pTWFW1Sp/desk-orgnizer-54.png",
    " https://i.postimg.cc/25fWJ5Fd/desk-orgnizer-eco-frindly.png",
    " https://i.postimg.cc/BvcFGGMr/deskorgnizer.png",
    " https://i.postimg.cc/mg7zQsfP/diary-s.png",
    " https://i.postimg.cc/BQL1nFmc/diaryas5.png",
    " https://i.postimg.cc/NFL2T2Bt/flask.png",
    " https://i.postimg.cc/zBxRVFmp/flask-2.png",
    " https://i.postimg.cc/NGPHtDkj/flask-set.png",
    " https://i.postimg.cc/zXsHbfMm/gadget.png",
    "  https://i.postimg.cc/brMDRYwt/gadget-56.png",
    "  https://i.postimg.cc/zXgVrrfx/gift-set-006-ha.png",
    "  https://i.postimg.cc/Xv3ZLz4Q/gift-set-2.png",
    " https://i.postimg.cc/JnF4f6Cw/gift-set-fractal.png",
    "  https://i.postimg.cc/W1mzdwgr/gifts-set.png",
    " https://i.postimg.cc/pX6Y0x6k/jute-bag.png",
    "  https://i.postimg.cc/D0WmmVPy/jute-bag-2.png",
    "  https://i.postimg.cc/nrw7wY0M/jute-bag-back-5.png",
    "  https://i.postimg.cc/TwfryPK2/jute-bag-front.png",
    "  https://i.postimg.cc/g0vVkhkB/keychain.png",
    "  https://i.postimg.cc/wvQQFmCs/keychain-1-back.png",
    "  https://i.postimg.cc/1XRcdzS7/keychain-54.png",
    "  https://i.postimg.cc/J7KQkj3f/keychain-56.png",
    " https://i.postimg.cc/Yq9zfjbh/keychain-589.png",
    " https://i.postimg.cc/MHsbJ8K6/keychain-84.png",
    "  https://i.postimg.cc/bwS0WWXP/keychain-9944.png",
    " https://i.postimg.cc/6QsVXcwv/keychain-back.png",
    "  https://i.postimg.cc/ZnqpcDP1/keychain45.png",
    " https://i.postimg.cc/LXDjjMPt/keychain55.png",
    " https://i.postimg.cc/bvKB4kVC/keychain656.png",
    " https://i.postimg.cc/B6HV3bdq/mug-4.png",
    " https://i.postimg.cc/Ghc50czC/mug-454.png",
    " https://i.postimg.cc/brPFw8h1/mug-5-back.png",
    " https://i.postimg.cc/yYvrswrS/mug-546.png",
    " https://i.postimg.cc/T2j4HyV0/mug-7.png",
    " https://i.postimg.cc/XYPHy9Wj/pen-78.png",
    " https://i.postimg.cc/0yjXQcLX/pen-78-back.png",
    " https://i.postimg.cc/NM6pVVHF/pen8.png",
    " https://i.postimg.cc/SNNDTgNQ/pendrive.png",
    " https://i.postimg.cc/sxKKfhKR/pendrive-2.png",
    " https://i.postimg.cc/x1B5dYGq/pendrive-back-2.png",
    " https://i.postimg.cc/1RKvrkSY/pendriver-round-Back.png",
    " https://i.postimg.cc/MHzd8D7D/penxs.png",
    " https://i.postimg.cc/NfJbWR56/power-bank.png",
    " https://i.postimg.cc/zfcrvytK/tag.png",
    "  https://i.postimg.cc/9Fpsz4z0/teshirt.png",
    "  https://i.postimg.cc/JzTwYyWv/tiffin.png",
    "  https://i.postimg.cc/bJtKv32f/tiffin-2.png",
    "   https://i.postimg.cc/W4KBjQz7/tiffin-back.png",
    "  https://i.postimg.cc/Bbx9mMqB/trophy-1.png",
    "  https://i.postimg.cc/HLjqqpYx/trophy-plaque.png",
    "  https://i.postimg.cc/cLkjMVRN/tshirt.png",
    "   https://i.postimg.cc/SRbHYCW2/tshirt-6-back.png",
    "  https://i.postimg.cc/y60M4pHF/tshirt-2.png",
    "  https://i.postimg.cc/WzmCGzn9/tshirt-2.png",
    "  https://i.postimg.cc/8PDq1dpx/tshirt-5.png",
    "  https://i.postimg.cc/BbC78ySk/umbrella.png",
    "  https://i.postimg.cc/8zz9v1rH/umbrella-87845.png",
    "  https://i.postimg.cc/JhyFTPxH/Whats-App-Image-2023-07-03-at-10-09-02.png",
  ];

  return (
    <>
      <MyNavbar />
      <div
        className="d-flex justify-content-center align-items-center text-center"
        style={{ backgroundColor: "white", height: "80px" }}
      >
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            marginTop: "10px",
            fontSize: "50px",
            color: "black",
          }}
          className="baseName"
        >
          <b>Our Work</b>
        </h1>
      </div>
      {/* <Container
        className="text-center"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        {imagevar.map(
          (imageUrl, index) =>
            index % 4 === 0 && (
              <Row key={index / 4}>
                {imagevar.slice(index, index + 4).map((image, idx) => (
                  <Col key={idx} xs={12} sm={6} md={3}>
                    <Card
                      className="text-center"
                      style={{
                        marginBottom: "20px",
                        width: "250px",
                        height: "380px",
                      }}
                    >
                      <CardBody>
                        <img
                          src={image}
                          alt={`Image ${index + idx}`}
                          style={{
                            marginBottom: "10px",
                            width: "80%",
                          }}
                        />
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            )
        )}
      </Container> */}
      <Container className="text-center mt-5" style={{ height: "80vh" }}>
        <h1>Coming soon</h1>
      </Container>
      <Footer />
    </>
  );
};

export default Gallery;
