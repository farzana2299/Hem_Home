import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function HomeMobile() {
    function toggleParagraph(sectionNumber) {
        var paragraph = document.getElementById('paragraph' + sectionNumber);
        var buttonRow = document.getElementById('buttonRow' + sectionNumber);

        // Toggle the visibility of the paragraph and buttonRow
        paragraph.style.display = paragraph.style.display === 'block' ? 'none' : 'block';
        buttonRow.style.display = buttonRow.style.display === 'block' ? 'none' : 'block';
    }

    // Initially hide the paragraph and buttonRow
    document.addEventListener('DOMContentLoaded', function () {
        var paragraph = document.getElementById('paragraph10');
        var buttonRow = document.getElementById('buttonRow10');

        paragraph.style.display = 'none';
        buttonRow.style.display = 'none';
    });

    return (
        <div className='mobile_view'>
            <div className='firsttdiv pb-5'>
                <div className='ftdiv'>
                    <div className='pt-3'>
                        <Navbar expand="lg">
                            <Container>
                                <Navbar.Brand href="#home" className='navtext'>
                                    <img src="https://i.postimg.cc/MGV72VRk/image-3-2.png" alt="" style={{ width: '150px', height: '100px' }} />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light bg-light" style={{ backgroundColor: 'rgba(137, 191, 80, 1);', color: ' rgba(0, 53, 78, 1);' }} />
                                <Navbar.Collapse id="basic-navbar-nav" >
                                    <Nav className=" container ps-5 ms-5">
                                        <Nav.Link href="#home" style={{ color: 'white' }} className="nav-link ps-5">Hem</Nav.Link>
                                        <Nav.Link href="#link" style={{ color: 'white' }} className="nav-link ps-5">Hållbarhet</Nav.Link>
                                        <Nav.Link href="#home" style={{ color: 'white' }} className="nav-link ps-5">Tjänster</Nav.Link>
                                        <Nav.Link href="#link" style={{ color: 'white' }} className="nav-link ps-5">Nyheter</Nav.Link>
                                        <Nav.Link href="#home" style={{ color: 'white' }} className="nav-link ps-5">Kontakt</Nav.Link>
                                        <Nav.Link href="#link" style={{ color: 'white' }} className="nav-link ps-5">Jobba med oss</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>

                    <div className='pt-5 ps-5 pe-5 text-white text-start mb-5 ' style={{ position: 'relative', top: '10%' }}>
                        <h1 style={{ fontSize: '20px', fontFamily: 'Inter' }}>EL,TEKNIK & INSTALLATIONER <br /> <h1 style={{ fontSize: '20px', fontFamily: 'Inter', position: 'relative', left: '10%' }}>FOR FRAMTIDEN MED </h1>
                           <span style={{ color: 'rgba(137, 191, 80, 1)', display: 'inline-flex', alignItems: 'center', position: 'relative', left: '10%' }}>HALLBARA FRAMSTEG</span> </h1>
                        {/* <h1 style={{ fontSize: '20px', fontFamily: 'Inter' }}> EL,TEKNIK & INSTALLATIONER FOR FRAMTIDEN MED  <span style={{ color: 'rgba(137, 191, 80, 1)', display: 'inline-flex', alignItems: 'center', position: 'relative', left: '10%' }}>HALLBARA FRAMSTEG</span></h1> */}
                        <p className=' container' style={{ fontSize: '12px', fontFamily: 'Inter' }}>Med målet att vara marknadsledande, kombinerar</p>
                        <p className=' container' style={{ fontSize: '12px', fontFamily: 'Inter', position: 'relative', bottom: '20px', left: '33px' }}> Egestam och Mattsson expertkunskap,</p>
                        <p className=' container' style={{ fontSize: '12px', fontFamily: 'Inter', position: 'relative', bottom: '40px', left: '31px' }}> engagemang och innovation för att bygga</p>
                        <p className=' container' style={{ fontSize: '12px', fontFamily: 'Inter', position: 'relative', bottom: '60px' }}> varaktiga kundrelationer och leverera arbete med</p>
                        <p className=' container' style={{ fontSize: '12px', fontFamily: 'Inter', position: 'relative', bottom: '80px' }}> fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
                    </div>
                </div>
            </div>

            <div className='section' style={{ backgroundColor: '#00354E' }}>
                <div style={{ position: 'relative', left: '6%' }}>
                    <div className='pt-4 pb-4 d-flex justify-content-between align-items-center' style={{ marginTop: '-10px', paddingLeft: '90px', overflowX: 'hidden' }}>
                        <h2 className='text-white fw-normal'><span style={{ fontSize: '40px', position: 'relative', right: '25%' }}>Nybyggnation</span></h2>
                        <i className="fa-solid fa-angle-down text-white pe-5" style={{ position: 'relative', right: '15%' }} onClick={() => toggleParagraph(10)}></i>
                    </div>
                    <p id="paragraph10" style={{ color: '#FFFFFF', marginLeft: '6%', fontSize: '16px', position: 'relative', right: '4.5%' }} className="hidden-paragraph container w-75">Vid nybyggnation, oavsett om det gäller bostäder, kommersiella lokaler eller kontor, är kvalitetsinstallationer av el och datanätverk kritiska. Dessa installationer omfattar en rad tjänster från belysning och uppvärmning till avancerade datanätverk och kommunikationssystem. Integration av moderna teknologier som smarta hem- och kontorslösningar,  samt energieffektiva installationer, är centrala för att skapa en hållbar, säker och effektiv miljö anpassad för framtida  behov. Som experter på området är Egestam & Mattsson de du kan lita på för att leverera högkvalitativa installationer.  Kontakta oss för  att ta det första steget mot en framtidssäker fastighet.</p>
                    <Row className='pt-4' id="buttonRow10" style={{ marginLeft: '9%', display: 'none', marginTop: '5%', position: 'relative', left: '20%' }}>
                        <p style={{
                            borderRadius: '18px',
                            padding: '7px',
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '45%',
                            height: '35px',
                            backgroundColor: 'white',
                            color: '#00354E',
                            position: 'relative',
                            zIndex: 100,
                            fontSize: '14px',
                            left: '-50px',
                            bottom: '34px'
                        }}>
                            Kontakta oss
                        </p>
                    </Row>
                </div>
            </div>

            <div className='section' style={{ backgroundColor: '#89BF50' }}>
                <div style={{ position: 'relative', left: '6%' }}>
                    <div className='pt-4 pb-4 d-flex justify-content-between align-items-center' style={{ marginTop: '-10px', paddingLeft: '90px', overflowX: 'hidden' }}>
                        <h2 className='text-white fw-normal'><span style={{ fontSize: '40px', color: '#00354E', position: 'relative', right: '30%', }}>Renovering</span></h2>
                        <i className="fa-solid fa-angle-down pe-5" style={{ position: 'relative', right: '15%' }} onClick={() => toggleParagraph(11)}></i>
                    </div>
                    <p id="paragraph11" style={{ fontSize: '16px', color: '#00354E', marginLeft: '6%', position: 'relative', right: '4.5%' }} className="hidden-paragraph container w-75">
                        Egestam och Mattsson erbjuder omfattande tjänster för renovering inom el och installation, anpassade för både  bostäder och kommersiella fastigheter. Vår expertis täcker allt från uppgradering av  befintliga elsystem till installation av  moderna, energieffektiva lösningar. Vi förstår vikten av att kombinera funktionalitet med estetik och arbetar nära våra  kunder för att säkerställa att varje projekt möter deras specifika behov och önskemål. Vårt team är specialiserat på att  leverera högkvalitativa resultat, från planering till slutförande, med fokus på säkerhet, hållbarhet och teknisk innovation.  Kontakta oss för att diskutera dina renoveringsbehov och få en skräddarsydd offert från branschens experter.
                    </p>
                    <Row className='pt-4' id="buttonRow11" style={{ position: 'relative', left: '20%', marginLeft: '9%', marginTop: '5%', display: 'none' }}>
                        <p style={{
                            borderRadius: '18px',
                            padding: '7px',
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '45%',
                            height: '35px',
                            backgroundColor: 'white',
                            color: '#00354E',
                            position: 'relative',
                            zIndex: 100,
                            fontSize: '14px',
                            left: '-50px',
                            bottom: '34px'
                        }}>
                            Kontakta oss
                        </p>
                    </Row>
                </div>
            </div>

            <div className='section' style={{ backgroundColor: '#00354E' }}>
                <div style={{ position: 'relative', left: '6%' }}>
                    <div className='pt-4 pb-4 d-flex justify-content-between align-items-center' style={{ marginTop: '-10px', paddingLeft: '90px', overflowX: 'hidden' }}>
                        <h2 className='text-white fw-normal'><span style={{ fontSize: '40px', position: 'relative', right: '28%' }}>Installation</span></h2>
                        <i className="fa-solid fa-angle-down text-white pe-5" style={{ position: 'relative', right: '15%' }} onClick={() => toggleParagraph(12)}></i>
                    </div>
                    <p id="paragraph12" style={{ color: 'white', marginLeft: '6%', position: 'relative', right: '4%', fontSize: '16px' }} className="hidden-paragraph container w-75 pb-2">
                        Egestam och Mattsson erbjuder specialanpassade installationstjänster för  värmesystem, smarta hem, effektiva kontorslösningar, avancerade säkerhetssystem och omfattande datainstallationer. Vår breda erfarenhet garanterar installationer som inte bara ökar komforten utan även energieffektiviteten och säkerheten i din fastighet. Vi engagerar oss i  ett nära samarbete med våra kunder för att förstå deras unika behov, säkerställa funktionell och estetiskt tilltalande design  och implementera de senaste innovationerna. Från grundlig planering till precision i utförandet, är vårt expertteam dedikerat  till detaljer och de högsta standarderna av säkerhet och hållbarhet. Kontakta Egestam och Mattsson för att utforska hur vi  kan transformera ditt utrymme till en intelligent och  miljö.  </p>
                    <Row className='pt-4' id="buttonRow12" style={{ position: 'relative', left: '20%', marginLeft: '9%', display: 'none', marginTop: '5%' }}>
                        <p style={{
                            borderRadius: '18px',
                            padding: '7px',
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '45%',
                            height: '35px',
                            backgroundColor: 'white',
                            color: '#00354E',
                            position: 'relative',
                            zIndex: 100,
                            fontSize: '14px',
                            left: '-50px',
                            bottom: '34px'
                        }}>
                            Kontakta oss
                        </p>
                    </Row>
                </div>
            </div>


            <div className='container pt-5 pb-5' style={{ backgroundColor: ' rgba(255, 255, 255, 1);', width: '100%', height: '100%' }}>
                <p className='w-75' style={{ color: 'rgba(0, 0, 0, 1);', fontSize: '18px', position: 'relative', left: '20px' }}><img src="https://i.postimg.cc/rm7vcDQB/image.png" style={{ width: '35px', height: '35px' }} alt="" />Välkommen till EM El & Data AB </p>
                <div>
                    <p className='w-75' style={{ position: 'relative', left: '7%', color: ' rgba(0, 53, 78, 1);', fontSize: '18px' }}>Egestam & Mattsson, grundat 2012, är experter inom el- och datanätverksinstallationer. Vi är ett entreprenörsdrivet företag framdrivet av ett team engagerade medarbetare.
                        Vi kombinerar gedigen teknisk kunskap med ett starkt engagemang för hållbarhet och är fokuserat på att leverera miljövänliga och innovativa lösningar för fastigheter och infrastruktur.</p>
                    <img style={{ position: 'relative', left: '60px' }} src="https://i.postimg.cc/3J8DNyyv/Link-4.png" alt="" />
                </div>
            </div>

            <div className=' pt-5' style={{ backgroundColor: 'rgba(137, 191, 80, 1)', color: 'white', fontFamily: 'Inter', width: '100%', height: '100%' }}>
                <div className='ps-4'>
                    <p className=' ps-5' style={{ fontSize: '24px', position: 'relative', left: '45px' }}> Norden ställer om till </p>
                    <p style={{ fontSize: '24px', position: 'relative', bottom: '13px', left: '65px' }}> klimatneutrala samhällen. </p>
                    <p style={{ fontSize: '24px', position: 'relative', bottom: '26px', left: '35px' }}> Egestam & Mattsson bistår dig </p>
                    <p style={{ fontSize: '24px', position: 'relative', bottom: '39px', left: '65px' }}> som kund i att utveckla</p>
                    <p style={{ fontSize: '24px', position: 'relative', bottom: '52px', left: '45px' }}>fastigheter och infrastruktur</p>
                    <p style={{ fontSize: '24px', position: 'relative', bottom: '65px', left: '55px' }}> som förbättrar samhällets</p>
                    <p style={{ fontSize: '24px', position: 'relative', bottom: '78px', left: '35px' }}> funktion nu och för framtiden.</p>
                </div>
                <p className='text-center' style={{ position: 'relative', bottom: '65px' }}><u>Så här jobbar vi  med hållbarhet</u></p>
            </div>

            <div className='ps-5 pb-5'>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className='ps-5 '>
                            <img className='pb-4' style={{ width: '100%', height: '100%', position: 'relative', right: '20%', top: '20px' }} src="https://i.postimg.cc/tCvSztXb/worker.png" alt="" />
                            <h2 className='w-75' style={{ fontSize: '32px', position: 'relative', right: '19%', color: ' rgba(0, 53, 78, 1);' }}>Energieffektiva lösningar inom elinstallation</h2>
                            <p style={{ fontSize: '18px', position: 'relative', right: '19%', color: ' rgba(0, 53, 78, 1);' }}>Eftersom energikostnaden är löpande blir energioptimering en investering både för dig och för miljön. Genom att underhålla, uppgradera och digitalisera fastigheter kan vi minska din energianvändning. Låt oss på
                                Egestam & Mattsson ge förslag på lösningar och göra konkreta insatser.
                                <img className='pt-3' src="https://i.postimg.cc/wjJP2f0N/Link-5.png" style={{ width: '100%', height: '100%' }} alt="" />
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='pb-5'>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className='container'>
                            <img className='pb-5' style={{ width: '80%', height: '100%', position: 'relative', left: '25px' }} src="https://i.postimg.cc/HnvxSsW6/Rectangle-6.png" alt="" />
                            <p className='ps-4' style={{ fontSize: '20px', color: ' rgba(0, 58, 58, 1);' }}><b>VÅRT MOTTO </b></p>
                            <p className='ps-4 w-75' style={{ fontSize: '20px', color: ' rgba(0, 58, 58, 1);' }}>Kontrollerad riskhantering med förankring i god affärsetik</p>
                            <p className='ps-4' style={{ fontSize: '20px', color: ' rgba(0, 58, 58, 1);', fontFamily: 'Roboto' }}>Egestam och Mattsson strävar efter  generera stark avkastning genom en stabil ekonomisk tillväxt. Vår verksa mhet präglas av en noggrant kontro llerad riskhantering med för an kring i god affärsetik. Ett centralt fokus i vår affärsstrategi är att aktivt minska vår miljöpåverkan, vilket vi ser som en avgörande aspekt för att främja en hållbar framtid.</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='pb-5'>
                <img src="https://i.postimg.cc/26McDn5v/div-hero.png" style={{ width: '100%', height: '100%' }} alt="" />
            </div>

            <div className='pb-5'>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className='container'>
                            <img className='ps-4' src="https://i.postimg.cc/3JBqy4fM/house.png" style={{ width: '85%', height: '100%' }} alt="" />
                            <p className='ps-4 ' style={{ fontSize: '32px', color: 'background: rgba(0, 53, 78, 1);', }}><b>Optimerade miljöer</b> </p>
                            <p className='ps-4 ' style={{ fontSize: '32px', color: 'background: rgba(0, 53, 78, 1);', position: 'relative', bottom: '20px' }}><b> för ett hållbart liv</b> </p>
                            <p className='w-75 ps-4' style={{ fontSize: '16px', color: 'background: rgba(0, 53, 78, 1);', position: 'relative' }}>Med teknikens framsteg utrustas fastigheter med avancerade funktioner. Grundläggande system såsom el, VVS, uppvärmning, kylning, ventilation, belysning, brandskydd, säkerhet och låssystem kompletteras nu med smarta lösningar. Digitalisering och hållbarhet leder utvecklingen med automation, effektiv energianvändning, solenergisystem och laddningsstationer för eldrivna fordon, vilket speglas i vår strävan efter att skapa integrerade, energieffektiva byggnader. Läs mer om hur vi kan hjälpa dig som fastighetsägare till en optimerad miljö.</p>
                        </div>
                        <div className='pt-4'>
                            <p style={{ fontSize: '15px', position: 'relative', left: '55%', color: 'linear-gradient(0deg, #0000C8, #0000C8),linear-gradient(0deg, #00354E, #00354E);' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='pb-5'>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div>
                            <p className='ps-4' style={{ fontSize: '36px' }}><img src="https://i.postimg.cc/cLHQjY4c/image-fill.png" alt="" />Nyheter</p>
                            <img className='ps-4 pb-3' style={{ width: '80%', height: '100%' }} src="https://i.postimg.cc/W1yqDHmB/Link-bb4557f2b401689c-org-jpg-1.png" alt="" />
                            <p className='ps-4' style={{ color: ' rgba(114, 114, 114, 1);' }}>NYHETER</p>
                            <p className='ps-4' style={{ color: ' rgba(114, 114, 114, 1);' }}>2023-11-21 08:00</p>
                            <p className='w-50 ps-4' style={{ fontSize: '20px' }}><b>Elektrifiering och framtidssäkring</b></p>
                            <p className='w-75 ps-4' style={{ fontSize: '20px', position: 'relative', bottom: '10px' }}>Egestam och Mattsson leder vägen i digitaliseringens era</p>
                            <div style={{ width: '90%', height: '100%' }}>
                                <p className='ps-4' style={{ fontSize: '20px' }}>I en tid där digitalisering och teknologisk innovation formar vårt samhälle, lägger Egestam och Mattsson stor vikt vid att ständigt vara i framkant. Med insikt om de framväxande trenderna - ökad elkonsumtion, ett starkare hållbarhetsfokus, och digitalisering - förstår Egestam & Mattsson vikten av att kontinuerligt kompetensutveckla sin personal. Genom att investera i utbildning och specialisering inom områden som integrerade system och effektiva energilösningar, positionerar Egestam och Mattsson sig för att möta marknadens behov och vara en nyckelaktör i att forma en mer hållbar och effektiv framtid.</p>
                            </div>
                            <div className='pt-4'>
                                <p style={{ fontSize: '15px', position: 'relative', left: '70%', color: 'linear-gradient(0deg, #0000C8, #0000C8),linear-gradient(0deg, #00354E, #00354E);' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='pb-5'>
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <div className='ps-4'>
                            <img className='pb-5' style={{ width: '90%', height: '100%' }} src="https://i.postimg.cc/YSJBpxdQ/Grundkraft-Gasellvinnare-2021-2022-2023-3.png" alt="" />
                            <p className='pt-3' style={{ position: 'relative', top: '30%', fontSize: '20px', color: 'rgba(0, 58, 58, 1)' }}><b> Vinnare av DI-GASELL</b></p>
                            <p style={{ fontSize: '20px', position: 'relative', left: '1%' }}>Egestam och Mattsson</p>
                            <p style={{ fontSize: '20px', position: 'relative', bottom: '17px', left: '1%', color: 'rgba(0, 58, 58, 1)' }}> utmärker sig återigen</p>
                            <div style={{ width: '90%', height: '100%' }}>
                                <p style={{ color: 'rgba(0, 0, 0, 1)', position: 'relative', bottom: '11px', fontSize: '15px' }}>Egestam och Mattsson har än en gång bevisat sin förmåga att överträffa marknadens förväntningar genom att vinna det prestigefyllda DI-Gasell-priset. Denna utmärkelse, som ges till Sveriges snabbast växande företag, speglar deras konsekventa tillväxt och framgång i branschen. Genom att fokusera på innovation, kundservice och hållbarhet, har Egestam och Mattsson inte bara förbättrat sin marknadsposition utan också bidragit till positiva samhällsförändringar. Denna prestation betonar vår starka drivkraft och engagemang för att kontinuerligt utvecklas och leda vägen inom el- och datanätverksinstallation.</p>
                            </div>
                            <div style={{ position: 'relative', top: '7px' }}>
                                <p style={{ fontSize: '15px', position: 'relative', left: '70%' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='pt-5 container pb-5'>
                <img className='pb-4' src="https://i.postimg.cc/fbd9XQvG/Figure.png" style={{ width: '95%', height: '100%' }} alt="" />
                <p className='ps-4' style={{ fontSize: '16px', color: ' rgba(0, 53, 78, 1);' }}>Egestam och Mattsson har antagit en policy som aktivt stödjer de globala målen för hållbar utveckling. Denna policy innefattar åtaganden att minska miljöpåverkan från verksamheten, främja energieffektivitet i alla projekt, och bidra till att bygga hållbara samhällen. Företaget strävar efter att integrera hållbara metoder i alla aspekter av vår affärsmodell, från design och installation till drift och underhåll. Genom att arbeta nära med kunder och samarbetspartners, siktar Egestam och Mattsson på att vara en drivkraft för positiv förändring och innovation inom sitt område, i linje med de globala hållbarhetsmålen.</p>
                <div style={{ position: 'relative', left: '20%' }}>
                    <img src="https://i.postimg.cc/gkMSt3PY/Group-11.png" alt="" />
                </div>
            </div>

            <div className='pt-3 container ps-4 pb-5'>
                <img className='pb-3' src="https://i.postimg.cc/KzNrkyGZ/worker-2.png" style={{ width: '80%', height: '100%' }} alt="" />
                <h2 style={{ fontSize: '32px', color: ' rgba(0, 53, 78, 1);' }}>Hör av dig till oss!</h2>
                <p className='w-50' style={{ fontSize: '16px', color: ' rgba(0, 53, 78, 1);' }}>Behöver du hjälp med något? Kontakta oss idag!</p>
                <img className='pb-3' src="https://i.postimg.cc/V6WQJ50d/Link-6.png" alt="" />
                <img className='pb-3' src="https://i.postimg.cc/MZ33dywz/Link-7.png" alt="" />
            </div>

            {/* footer  */}

            <div className='pb-5' style={{ width: '100%', height: '100%', backgroundColor: ' rgba(137, 191, 80, 1)' }}>
                <div className='pt-4 ps-4'>
                    <img src="https://i.postimg.cc/SK0WgfDY/image-3-5.png" alt="" />
                </div>
                <div className='text-start ps-4 pt-3 text-white pb-3'>
                    <h3 style={{fontSize:'32px'}}>Kontakt</h3>

                    <div className='line-spacing-mobile' style={{fontSize:'16px'}}>
                        <p className='fcp2'>Egestam Mattsson El & Data AB</p>
                        <p className='fcp2'>Ridspögatan 15a</p>
                        <p className='fcp2'>213 77 Malmö</p>
                    </div>
                    <div className='line-spacing-mobile pt-3' style={{fontSize:'16px'}}>
                        <p className='fcp3'>Tel: 040-6170166</p>
                        <p className='fcp3'>E-post: info@emeldata.se </p>
                    </div>
                    <hr />
                </div>

                <div>
                    <Row className='text-white'>
                        <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='w-100 conatiner paragraph ps-4' style={{fontSize:'16px'}}>
                                    <b><p>Meny</p></b>
                                    <p>Vårt erbjudande</p>
                                    <p>Hållbarhet</p>
                                    <p>Jobba hos oss</p>
                                    <p>Om oss</p>
                                    <p>Kontakta oss</p>
                                </div>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='w-100 conatiner ms-3 ' style={{fontSize:'16px'}}>
                                    <b><p style={{ display: 'inline-flex', alignItems: 'center' }}>Din integritet</p></b>
                                    <p>Integritetspolicy</p>
                                    <p>Cookiepolicy</p>
                                    <p style={{ display: 'inline-flex', alignItems: 'center',gap: '5px' }}><img src="https://i.postimg.cc/90r8QxHk/List-Item-Link-SVG.png"  alt="Facebook" /> Facebook</p>
                                </div>
                        </Col>
                    </Row>
                </div>

            </div>

        </div>
    )
}

export default HomeMobile