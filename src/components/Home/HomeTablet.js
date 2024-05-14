import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './HomeTablet.css';

function HomeTablet() {
    function toggleParagraph(sectionNumber) {
        var paragraph = document.getElementById('paragraph' + sectionNumber);
        var buttonRow = document.getElementById('buttonRow' + sectionNumber);

        // Toggle the visibility of the paragraph and buttonRow
        var isHidden = paragraph.style.display === 'none';
        paragraph.style.display = isHidden ? 'block' : 'none';
        buttonRow.style.display = isHidden ? 'block' : 'none';
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Initially hide the paragraph and buttonRow for each section
        var sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            var paragraph = section.querySelector('.hidden-paragraph');
            var buttonRow = section.querySelector('.buttonRow');
            paragraph.style.display = 'none';
            buttonRow.style.display = 'none';

            // Add event listener to the arrow button to toggle paragraph visibility
            var arrowButton = section.querySelector('.fa-angle-down');
            arrowButton.addEventListener('click', function () {
                var sectionNumber = section.id.slice(-2); // Extract section number from section id
                toggleParagraph(sectionNumber);
            });
        });
    });

    return (
        <div className='tablet_view'>
            <div>
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

                        <div className='pt-5 container w-100 text-white text-start mb-5 ' style={{ position: 'relative', top: '100px' }}>
                            <h1 style={{ fontSize: '60px' }}>EL, Teknik & Installationer för framtiden med <span style={{ color: 'rgba(137, 191, 80, 1)', display: 'inline-flex', alignItems: 'center' }}>hållbara framsteg</span> </h1>
                            <p style={{ fontSize: '20px' }}>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
                        </div>
                    </div>
                </div>


                <div className=' pt-5 pb-5 thirddiv' >
                    <div className=' container text-start' style={{ position: 'relative', }}>
                        <h2 className='w-75' style={{ color: 'rgba(0, 53, 78, 1)', fontSize: '32px' }}><img src="https://i.postimg.cc/rm7vcDQB/image.png" alt="" />Välkommen till EM El & Data AB </h2>
                        <div>
                            <p className='w-75' style={{ position: 'relative', left: '13.5%' }}>Egestam & Mattsson grundades 2012, vi är experter inom el- och datanätverksinstallationer.
                                Ett entreprenörsdrivet företag som drivs med ett team engagerade medarbetare. Vi kombinerar gedigen teknisk kunskap med ett starkt engagemang för hållbarhet, fokuserade på att leverera miljövänliga och innovativa lösningar för fastigheter och infrastruktur.</p>
                        </div>
                    </div>
                </div>

                {/* accordion  */}
                <div className='section' style={{ backgroundColor: '#00354E' }}>
                <div style={{ position: 'relative', left: '6%' }}>
                    <div className='pt-4 pb-4 d-flex justify-content-between align-items-center' style={{ marginTop: '-10px', paddingLeft: '90px', overflowX: 'hidden' }}>
                        <h2 className='text-white fw-normal'><span style={{ fontSize: '35px', position: 'relative', right: '5%' }}>Nybyggnation</span></h2>
                        <i className="fa-solid fa-angle-down text-white pe-5" style={{ position: 'relative', right: '15%' }} onClick={() => toggleParagraph(10)}></i>
                    </div>
                    <p id="paragraph10" style={{ color: '#FFFFFF', marginLeft: '6%' }} className="hidden-paragraph">Vid nybyggnation, oavsett om det gäller bostäder, kommersiella lokaler eller kontor, är kvalitetsinstallationer av el och <br /> datanätverk kritiska. Dessa installationer omfattar en rad tjänster från belysning och uppvärmning till avancerade <br /> datanätverk och kommunikationssystem. Integration av moderna teknologier som smarta hem- och kontorslösningar, <br /> samt energieffektiva installationer, är centrala för att skapa en hållbar, säker och effektiv miljö anpassad för framtida <br /> behov. Som experter på området är Egestam & Mattsson de du kan lita på för att leverera högkvalitativa installationer. <br /> Kontakta oss för  att ta det första steget mot en framtidssäker fastighet.</p>
                    <Row id="buttonRow10" style={{ marginLeft: '9.5%', display: 'none', marginTop: '5%' }}>
                        <p style={{
                            borderRadius: '18px',
                            padding: '7px',
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '15%',
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
            <div className='section' style={{ backgroundColor: '#89BF50', position: 'relative', bottom: '5.5px' }}>
                <div style={{ position: 'relative', left: '6%' }}>
                    <div className='pt-4 pb-4 d-flex justify-content-between align-items-center' style={{ marginTop: '-10px', paddingLeft: '90px', overflowX: 'hidden' }}>
                        <h2 className='text-white fw-normal'><span style={{ fontSize: '40px', color: 'white', position: 'relative', right: '9%', }}>Renovering</span></h2>
                        <i className="fa-solid fa-angle-down pe-5" style={{ position: 'relative', right: '15%', color: 'white' }} onClick={() => toggleParagraph(11)}></i>
                    </div>
                    <p id="paragraph11" style={{ fontSize: '16px', color: '#00354E', marginLeft: '6%', position: 'relative', right: '1%' }} className="hidden-paragraph container w-75">
                        Egestam och Mattsson erbjuder omfattande tjänster för renovering inom el och installation, anpassade för både  bostäder och kommersiella fastigheter. Vår expertis täcker allt från uppgradering av  befintliga elsystem till installation av  moderna, energieffektiva lösningar. Vi förstår vikten av att kombinera funktionalitet med estetik och arbetar nära våra  kunder för att säkerställa att varje projekt möter deras specifika behov och önskemål. Vårt team är specialiserat på att  leverera högkvalitativa resultat, från planering till slutförande, med fokus på säkerhet, hållbarhet och teknisk innovation.  Kontakta oss för att diskutera dina renoveringsbehov och få en skräddarsydd offert från branschens experter.
                    </p>
                    <Row className='pt-4' id="buttonRow11" style={{ position: 'relative', left: '0.5%', marginLeft: '9%', marginTop: '3.5%', display: 'none' }}>
                        <p style={{
                            borderRadius: '18px',
                            padding: '7px',
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '15%',
                            height: '35px',
                            backgroundColor: 'white',
                            color: '#00354E',
                            position: 'relative',
                            zIndex: 100,
                            fontSize: '14px',
                            left: '-50px',
                            bottom: '39px'
                        }}>
                            Kontakta oss
                        </p>
                    </Row>
                </div>
            </div>

            <div className='section' style={{ backgroundColor: '#00354E', position: 'relative', bottom: '11px' }}>
                <div style={{ position: 'relative', left: '6%' }}>
                    <div className='pt-4 pb-4 d-flex justify-content-between align-items-center' style={{ marginTop: '-10px', paddingLeft: '90px', overflowX: 'hidden' }}>
                        <h2 className='text-white fw-normal'><span style={{ fontSize: '40px', position: 'relative', right: '5%' }}>Installation</span></h2>
                        <i className="fa-solid fa-angle-down text-white pe-5" style={{ position: 'relative', right: '15%' }} onClick={() => toggleParagraph(12)}></i>
                    </div>
                    <p id="paragraph12" style={{ color: 'white', marginLeft: '6%' }} className="hidden-paragraph">
                        Egestam och Mattsson erbjuder specialanpassade installationstjänster för moderna värmesystem, smarta hem, effektiva <br /> kontorslösningar, avancerade säkerhetssystem och omfattande datainstallationer. Vår breda erfarenhet garanterar <br /> installationer som inte bara ökar komforten utan även energieffektiviteten och säkerheten i din fastighet. Vi engagerar oss i <br /> ett nära samarbete med våra kunder för att förstå deras unika behov, säkerställa funktionell och estetiskt tilltalande design <br /> och implementera de senaste innovationerna. Från grundlig planering till precision i utförandet, är vårt expertteam dedikerat <br /> till detaljer och de högsta standarderna av säkerhet och hållbarhet. Kontakta Egestam och Mattsson för att utforska hur vi <br /> kan transformera ditt utrymme till en intelligent och energismart miljö.  </p>
                    <Row id="buttonRow12" style={{ marginLeft: '9.5%', display: 'none', marginTop: '5%' }}>
                        <p style={{
                            borderRadius: '18px',
                            padding: '7px',
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '15%',
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
            <div className='fifthdiv pt-5 pb-5' style={{ width: '100%', height: '300px' }}>
                <div className='ps-5 pe-5  text-center' style={{ color: 'rgba(0, 53, 78, 1)', position: 'relative', top: '35px' }}>
                    <h3 style={{ fontFamily: 'Inter', fontSize: '24px' }} className='pb-3'>Norden ställer om till klimatneutrala samhällen. Egestam & Mattsson bistår dig som kund i att utveckla fastigheter och infrastruktur som förbättrar samhällets funktion nu och för framtiden.</h3>
                    <p style={{ fontFamily: 'Inter', fontSize: '16px' }} className='text-center'><u>Så här jobbar vi  med hållbarhet</u> </p>
                </div>
            </div>

            <div className='sixth_ipad '>
                <div className='sixth_ipad_transparancy'>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className=''>
                            <div className='  pt-5 sit' style={{ position: 'absolute', left: '10%', top: '10%', width: '70%', height: '100%' }}>
                                <h2 style={{ fontSize: '48px' }} className='pb-3'>Energieffektiva lösningar inom elinstallation</h2>
                                <p style={{ fontSize: '18px' }} className='pb-3'>Eftersom energikostnaden är löpande blir energioptimering en investering
                                    både för dig och för miljön. Genom att underhålla, uppgradera och
                                    digitalisera fastigheter kan vi minska din energianvändning.  Låt oss på
                                    Egestam & Mattsson ge förslag på lösningar och göra konkreta insatser.
                                </p>
                                <button type="button" class="block">Så här jobbar vi med energioptimering <img src="https://i.postimg.cc/3xBtkBZs/after.png" alt="" /> </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>


            <div className='container w-75 pt-5 pb-5'>
                <img style={{ width: '120%', height: '420px', position: 'relative', right: '10%' }} src="https://i.postimg.cc/d1kzPcyV/Picture-jpg.png" alt="" />
            </div>

            <div className='pb-5'>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className=' ps-5'>
                            <img className='container ' style={{ width: '90%', height: '100%', borderRadius: '8px' }} src="https://i.postimg.cc/FHvq61Rx/Rectangle-6.png" alt="" />
                            <p className='pt-3 ps-2' style={{ color: 'rgba(0, 58, 58, 1)', fontSize: '32px', color: 'rgba(0, 58, 58, 1);', position: 'relative', left: '2%' }}>VÅRT MOTTO</p>
                            <p className='ps-2' style={{ fontFamily: 'Inter', fontSize: '16px', color: 'rgba(0, 58, 58, 1);', position: 'relative', left: '2%' }}>
                                Kontrollerad riskhaing förankring i god affärsetik</p>
                            <p style={{ fontFamily: 'Roboto', fontSize: '15px', color: 'rgba(0, 53, 78, 1);', position: 'relative', left: '2%' }} className='pt-2 ps-2'>Egestam och Mattsson strävar efter att generera stark avkastning genom en stabil ekonomisk tillväxt. Vår verksamhet präglas av en noggrant kontrollerad riskhantering med förankring i god affärsetik. Ett centralt fokus i vår affärsstrategi är att aktivt minska vår miljöpåverkan, vilket vi ser som en avgörande aspekt för att främja en hållbar framtid.</p>

                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className=' pe-5 ps-3'>
                            <img className='container pe-5'
                                src="https://i.postimg.cc/nLczfdYF/bravida-5180-690x460px-jpg.png"
                                style={{ width: '390px' }} alt="" />
                            <h2 className='pt-3 ps-2' style={{ fontSize: '32px', position: 'relative', left: '2%', color: 'rgba(0, 58, 58, 1);' }}>Hör av dig till oss</h2>
                            <p className='container' style={{ fontFamily: 'Inter', fontSize: '20px', position: 'relative', left: '1%', color: 'rgba(0, 58, 58, 1);' }}>Behöver du hjälp med något ?
                                Kontakta oss idag!</p>
                            <img style={{ position: 'relative', left: '2%' }} src="https://i.postimg.cc/kXx1R3RL/Group-133.png" alt="" />
                            <img style={{ position: 'relative', left: '2%' }} className='pt-3' src="https://i.postimg.cc/LXp7b9Pk/Group-132.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='pt-5 pb-5'>
                <Row className='pt-5 container ps-5'>
                    <p className='ps-4' style={{
                        color: 'rgba(0, 58, 58, 1)', position: 'relative',
                        fontFamily: 'Roboto', fontSize: '47.24px'
                    }}><b>Nyheter</b></p>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div>
                            <div className='container ' style={{ color: ' rgba(0, 53, 78, 1)' }}>

                                <img style={{ width: '100%', height: '200px' }} src="https://i.postimg.cc/gjgqLHw2/DALL-E-2024-01-24-15-03-12-Create-an-image-of-a-stylized-residential-and-commercial-area-depicting.png" alt="" />
                                <p className='pt-3' style={{ fontSize: '11.59px', color: ' rgba(114, 114, 114, 1)' }}>NYHETER</p>
                                <p style={{ fontSize: '10.39px', color: ' rgba(114, 114, 114, 1)' }}>2023-11-21 08:00</p>
                                <p style={{ fontSize: '32px' }} className='w-100'>Optimerade miljöer för ett hållbart liv</p>
                                <p className='pt-5' style={{ fontSize: '16px', lineHeight: '26px' }}>Med teknikens framsteg utrustas fastigheter med avancerade funktioner. Grundläggande system såsom el, VVS, uppvärmning, kylning, ventilation, belysning, brandskydd, säkerhet och låssystem kompletteras nu med smarta lösningar. Digitalisering och hållbarhet leder utvecklingen med automation, effektiv energianvändning, solenergisystem och laddningsstationer för eldrivna fordon, vilket speglas i vår strävan efter att skapa integrerade, energieffektiva byggnader. Läs mer om hur vi kan hjälpa dig som fastighetsägare till en optimerad miljö.</p>
                                <div className='pt-4' style={{ position: 'relative', top: '8px' }}>
                                    <p style={{ fontSize: '15px', position: 'relative', left: '75%', color: 'linear-gradient(0deg, #0000C8, #0000C8),linear-gradient(0deg, #00354E, #00354E);', top: '2%' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div style={{ position: 'relative', left: '20%' }}>
                            <div className='container' style={{ color: ' rgba(0, 53, 78, 1)' }}>
                                <img src="https://i.postimg.cc/V6NLC5zR/Link-bb4557f2b401689c-org-jpg.png" style={{ width: '100%', height: '200px' }} alt="" />
                                <p className='pt-3' style={{ fontSize: '11.59px', color: ' rgba(114, 114, 114, 1)' }}>NYHETER</p>
                                <p style={{ fontSize: '10.39px', color: ' rgba(114, 114, 114, 1)' }}>2023-11-21 08:00</p>
                                <p style={{ fontSize: '32px' }} className='w-100'>Elektrifiering och framtidssäkring </p>
                                <p style={{ fontSize: '20px' }}>Egestam och Mattsson leder vägen i digitaliseringens era</p>
                                <p style={{ fontSize: '15px', color: 'rgba(0, 0, 0, 1)', lineHeight: '22.56px' }}>I en tid där digitalisering och teknologisk innovation formar vårt samhälle, lägger Egestam och Mattsson stor vikt vid att ständigt vara i framkant. Med insikt om de framväxande trenderna - ökad elkonsumtion, ett starkare hållbarhetsfokus, och digitalisering - förstår Egestam & Mattsson vikten av att kontinuerligt kompetensutveckla sin personal. Genom att investera i utbildning och specialisering inom områden som integrerade system och effektiva energilösningar, positionerar Egestam och Mattsson sig för att möta marknadens behov och vara en nyckelaktör i att forma en mer hållbar och effektiv framtid.</p>
                                <div className='pt-4'>
                                    <p style={{ fontSize: '15px', position: 'relative', left: '75%' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='pt-5 pb-5'>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='ps-5 container'>
                            <div>
                                <img className='pb-5' style={{ width: '100%', height: '100%' }} src="https://i.postimg.cc/YSJBpxdQ/Grundkraft-Gasellvinnare-2021-2022-2023-3.png" alt="" />
                                <p className='pt-3' style={{ position: 'relative', top: '30%', fontSize: '32px', color: ' rgba(0, 58, 58, 1);' }}>Vinnare av DI-GASELL</p>
                                <p style={{ fontSize: '20px', color: ' rgba(0, 58, 58, 1);', position: 'relative', left: '1%' }}>Egestam och Mattsson</p>
                                <p style={{ fontSize: '20px', position: 'relative', bottom: '17px', left: '1%', color: ' rgba(0, 58, 58, 1);' }}> utmärker sig återigen</p>
                                <p style={{ color: 'rgba(0, 0, 0, 1)', position: 'relative', bottom: '11px', fontSize: '15px' }}>Egestam och Mattsson har än en gång bevisat sin förmåga att överträffa marknadens förväntningar genom att vinna det prestigefyllda DI-Gasell-priset. Denna utmärkelse, som ges till Sveriges snabbast växande företag, speglar deras konsekventa tillväxt och framgång i branschen. Genom att fokusera på innovation, kundservice och hållbarhet, har Egestam och Mattsson inte bara förbättrat sin marknadsposition utan också bidragit till positiva samhällsförändringar. Denna prestation betonar vår starka drivkraft och engagemang för att kontinuerligt utvecklas och leda vägen inom el- och datanätverksinstallation.
                                </p>
                                <div style={{ position: 'relative', top: '12px' }}>
                                    <p style={{ fontSize: '15px', position: 'relative', left: '75%' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <div className='pe-5 container'>
                            <div>
                                <img className='pb-5' style={{ width: '100%', height: '100%' }} src="https://i.postimg.cc/YSJBpxdQ/Grundkraft-Gasellvinnare-2021-2022-2023-3.png" alt="" />
                                <p className='pt-3' style={{ position: 'relative', top: '30%', fontSize: '32px', color: ' rgba(0, 58, 58, 1);' }}>Vinnare av DI-GASELL</p>
                                <p style={{ fontSize: '20px', color: ' rgba(0, 58, 58, 1);', position: 'relative', left: '1%' }}>Egestam och Mattsson</p>
                                <p style={{ fontSize: '20px', position: 'relative', bottom: '17px', left: '1%', color: ' rgba(0, 58, 58, 1);' }}> utmärker sig återigen</p>
                                <p style={{ color: 'rgba(0, 0, 0, 1)', position: 'relative', bottom: '11px', fontSize: '15px' }}>Egestam och Mattsson har än en gång bevisat sin förmåga att överträffa marknadens förväntningar genom att vinna det prestigefyllda DI-Gasell-priset. Denna utmärkelse, som ges till Sveriges snabbast växande företag, speglar deras konsekventa tillväxt och framgång i branschen. Genom att fokusera på innovation, kundservice och hållbarhet, har Egestam och Mattsson inte bara förbättrat sin marknadsposition utan också bidragit till positiva samhällsförändringar. Denna prestation betonar vår starka drivkraft och engagemang för att kontinuerligt utvecklas och leda vägen inom el- och datanätverksinstallation.
                                </p>
                                <div style={{ position: 'relative', top: '12px' }}>
                                    <p style={{ fontSize: '15px', position: 'relative', left: '75%' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='eighthdivv pt-5  pb-5'>
                <div className='transparancyy'>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div style={{ color: 'white' }} className='container ps-5 pt-5'>
                                <h3>Vi gör skillnad</h3>
                                <h1>Egestam & Mattsson satsar på en hållbar affär</h1>
                                <Row className='pt-4'>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div>
                                            <p style={{ fontSize: '24px', fontFamily: 'Roboto' }}>Hållbar framtid en del ev vår affär vår policy för att bidra till de Globala Målen</p>
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div>
                                            <p style={{ fontSize: '12px', fontFamily: 'Inter' }}>Egestam och Mattsson har antagit en policy som aktivt stödjer de globala målen för hållbar utveckling. Denna policy innefattar åtaganden att minska miljöpåverkan från verksamheten, främja energieffektivitet i alla projekt, och bidra till att bygga hållbara samhällen. Företaget strävar efter att integrera hållbara metoder i alla aspekter av sin affärsmodell, från design och installation till drift och underhåll. Genom att arbeta nära med kunder och samarbetspartners, siktar Egestam och Mattsson på att vara en drivkraft för positiv förändring och innovation inom sitt område, i linje med de globala hållbarhetsmålen.</p>
                                        </div>
                                    </Col>
                                </Row>
                                <div>
                                    <a href="asds" style={{ position: 'relative', bottom: '20px' }}><img src="https://i.postimg.cc/wjRkBdSW/Link-2.png" alt="" /></a>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </div>

        </div>
            {/* footer  */ }
    <div className=''>
        <div className='ft  pb-3 '>
            <Row className='pb-1 pt-2' >
                <Col lg={4} md={4} sm={4} xs={4}>
                    <div className='text-start ps-4 pt-3 '>
                        <h3 style={{ fontSize: '24px' }}>Kontakt</h3>

                        <div className='line-spacing-mobile' style={{ fontSize: '16px' }}>
                            <p style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }} className='fcp2'>Egestam Mattsson El & Data AB</p>
                            <p className='fcp2'>Ridspögatan 15a</p>
                            <p className='fcp2'>213 77 Malmö</p>
                        </div>
                        <div className='line-spacing-mobile pt-3' style={{ fontSize: '16px' }}>
                            <p className='fcp3'>Tel: 040-6170166</p>
                            <p className='fcp3'>E-post: info@emeldata.se </p>
                        </div>
                        <p className='fcp3 privacypolicy-align pt-3'>Integritetspolicy</p>
                    </div>


                </Col>
                <Col lg={4} md={4} sm={4} xs={12} className='secrow text-start'>
                    <Row style={{ fontSize: '120%', position: 'relative', top: '2%' }} className='ps-3 pt-5 '>
                        <Col lg={6} md={6} sm={6} xs={6} className='custom-div-mobile'>
                            <div className='w-100 conatiner '>
                                <b><p style={{ fontSize: '18px' }}>Meny</p></b>
                                <p style={{ fontSize: '16px' }}>Hem</p>
                                <p style={{ fontSize: '16px' }}>Hållbarhet</p>
                                <p style={{ fontSize: '16px' }}>Tjänter</p>
                                <p style={{ fontSize: '16px' }}>Kontakta oss</p>
                                <p style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '16px' }}>Jobba med oss</p>
                            </div>

                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <div className='w-100 conatiner ms-3 '>
                                <b><p style={{ display: 'inline-flex', alignItems: 'center', fontSize: '18px' }}>Din integritet</p></b>
                                <p style={{ fontSize: '16px' }}>Integritetspolicy</p>
                                <p style={{ fontSize: '16px' }}>Cookiepolicy</p>
                                <p style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '16px' }}><img src="https://i.postimg.cc/90r8QxHk/List-Item-Link-SVG.png" alt="Facebook" /> Facebook</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4} className=" pt-5 container">
                    <div className='ps-5 pt-1'>
                        <h3 className='text-start' style={{ fontSize: '20px' }} >Gasellvinnare</h3>
                        <img src="https://i.postimg.cc/qBcnd43C/Grundkraft-Gasellvinnare-2021-2022-2023-1.png" alt=""
                            style={{ position: 'relative', right: '10%', width: '100%', height: '100%' }} />
                        <img className='pt-4 top-align ' style={{ position: 'relative', right: '7%' }} src="https://i.postimg.cc/tCtLPZVC/image-3.png" alt="" />

                    </div>
                </Col>

            </Row>

            <Row className='text-start cprow ps-4 ' style={{ color: ' rgba(204, 204, 204, 1);' }} >
                <Col lg={12} md={12} sm={12} xs={12}>

                    <p style={{ color: 'lightgrey', fontSize: '16px' }}>  Copyright © 2024 All rights reserved.</p>
                </Col>
            </Row>
        </div>
    </div>
        </div >
    )
}

export default HomeTablet
