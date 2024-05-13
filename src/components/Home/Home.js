import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeTablet from './HomeTablet';
import HomeMobile from './HomeMobile';


function Home() {
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
        <div>
            <div className='desktop_view'>
                <div className='firstdiv pb-5'>
                    <div className='fdiv'>
                        <div className='pt-3'>
                            <Navbar expand="lg">
                                <Container>
                                    <Navbar.Brand href="#home" className='navtext'>
                                        <img src="https://i.postimg.cc/MGV72VRk/image-3-2.png" alt="" style={{ width: '150px', height: '100px' }} />
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-light" />
                                    <Navbar.Collapse id="basic-navbar-nav">
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

                        <div className='pt-5 container w-50 text-white text-start mb-5 fstdiv'>
                            <h1 className='fsth1'>EL, Teknik & Installationer för framtiden med <span style={{ color: 'rgba(137, 191, 80, 1)' }}> hållbara framsteg</span> </h1>
                            <p className=' w-75 fstpara'>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
                        </div>
                    </div>
                </div>

                <div className='seconddiv'>
                    <Row style={{ fontFamily: 'Inter', color: 'white' }}>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <img className='pt-3' style={{ position: 'relative', left: '40%' }} src="https://i.postimg.cc/x1bDkwCS/image-3-1.png" alt="" />
                        </Col>
                        <Col lg={1} md={1} sm={1} xs={1}>
                            <p className='ps-5' style={{ position: 'relative', top: '50%' }}>Hem</p>
                        </Col>
                        <Col lg={1} md={1} sm={1} xs={1}>
                            <p className='ps-5' style={{ position: 'relative', top: '50%' }}>Hållbarhet</p>
                        </Col>
                        <Col lg={1} md={1} sm={1} xs={1}>
                            <p className='ps-5' style={{ position: 'relative', top: '50%' }}>Tjänster</p>
                        </Col>
                        <Col lg={1} md={1} sm={1} xs={1}>
                            <p className='ps-5' style={{ position: 'relative', top: '50%' }}>Nyheter</p>
                        </Col>
                        <Col lg={1} md={1} sm={1} xs={1}>
                            <p className='ps-5' style={{ position: 'relative', top: '50%' }}>Kontakt</p>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <p className=' ps-5' style={{ position: 'relative', top: '50%' }}>Jobba med oss</p>
                        </Col>
                    </Row>
                </div>

                <div className='thirddiv pt-5 pb-5'>
                    <div className='w-50 container text-start' style={{ position: 'relative', right: '13%' }}>
                        <h2 style={{ color: 'rgba(0, 53, 78, 1)' }}><img src="https://i.postimg.cc/rm7vcDQB/image.png" alt="" />Välkommen till EM El & Data AB </h2>
                        <div>
                            <p className=''>Egestam & Mattsson grundades 2012, vi är experter inom el- och datanätverksinstallationer.
                                Ett entreprenörsdrivet företag som drivs med ett team engagerade medarbetare. Vi kombinerar gedigen teknisk kunskap med ett starkt engagemang för hållbarhet, fokuserade på att leverera miljövänliga och innovativa lösningar för fastigheter och infrastruktur.</p>
                        </div>
                    </div>
                </div>
                {/* Accordion  */}
                <div className='section' style={{ backgroundColor: '#00354E' }}>
                    <div style={{ position: 'relative', left: '6%' }}>
                        <div className='pt-4 pb-4 d-flex justify-content-between align-items-center' style={{ marginTop: '-10px', paddingLeft: '90px', overflowX: 'hidden' }}>
                            <h2 className='text-white fw-normal'><span style={{ fontSize: '35px', position: 'relative', right: '5%' }}>Nybyggnation</span></h2>
                            <i className="fa-solid fa-angle-down text-white pe-5" style={{ position: 'relative', right: '15%' }} onClick={() => toggleParagraph(10)}></i>
                        </div>
                        <p id="paragraph10" style={{ color: '#FFFFFF', marginLeft: '6%' }} className="hidden-paragraph">Vid nybyggnation, oavsett om det gäller bostäder, kommersiella lokaler eller kontor, är kvalitetsinstallationer av el och <br /> datanätverk kritiska. Dessa installationer omfattar en rad tjänster från belysning och uppvärmning till avancerade <br /> datanätverk och kommunikationssystem. Integration av moderna teknologier som smarta hem- och kontorslösningar, <br /> samt energieffektiva installationer, är centrala för att skapa en hållbar, säker och effektiv miljö anpassad för framtida <br /> behov. Som experter på området är Egestam & Mattsson de du kan lita på för att leverera högkvalitativa installationer. <br /> Kontakta oss för  att ta det första steget mot en framtidssäker fastighet.</p>
                        <Row id="buttonRow10" style={{ marginLeft: '9%', display: 'none', marginTop: '5%' }}>
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

                <div className='section' style={{ backgroundColor: '#89BF50' }}>
                    <div style={{ position: 'relative', left: '6%' }}>
                        <div className='pt-4 pb-4 d-flex justify-content-between align-items-center' style={{ marginTop: '-10px', paddingLeft: '90px', overflowX: 'hidden' }}>
                            <h2 className='text-white fw-normal'><span style={{ fontSize: '40px', color: '#00354E', position: 'relative', right: '5%' }}>Renovering</span></h2>
                            <i className="fa-solid fa-angle-down pe-5" style={{ position: 'relative', right: '15%' }} onClick={() => toggleParagraph(11)}></i>
                        </div>
                        <p id="paragraph11" style={{ color: '#00354E', marginLeft: '6%' }} className="hidden-paragraph">
                            Egestam och Mattsson erbjuder omfattande tjänster för renovering inom el och installation, anpassade för både <br /> bostäder och kommersiella fastigheter. Vår expertis täcker allt från uppgradering av  befintliga elsystem till installation av <br /> moderna, energieffektiva lösningar. Vi förstår vikten av att kombinera funktionalitet med estetik och arbetar nära våra <br /> kunder för att säkerställa att varje projekt möter deras specifika behov och önskemål. Vårt team är specialiserat på att <br /> leverera högkvalitativa resultat, från planering till slutförande, med fokus på säkerhet, hållbarhet och teknisk innovation. <br /> Kontakta oss för att diskutera dina renoveringsbehov och få en skräddarsydd offert från branschens experter.
                        </p>
                        <Row id="buttonRow11" style={{ marginLeft: '9%', marginTop: '5%', display: 'none' }}>
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

                <div className='section' style={{ backgroundColor: '#00354E' }}>
                    <div style={{ position: 'relative', left: '6%' }}>
                        <div className='pt-4 pb-4 d-flex justify-content-between align-items-center' style={{ marginTop: '-10px', paddingLeft: '90px', overflowX: 'hidden' }}>
                            <h2 className='text-white fw-normal'><span style={{ fontSize: '40px', position: 'relative', right: '5%' }}>Installation</span></h2>
                            <i className="fa-solid fa-angle-down text-white pe-5" style={{ position: 'relative', right: '15%' }} onClick={() => toggleParagraph(12)}></i>
                        </div>
                        <p id="paragraph12" style={{ color: 'white', marginLeft: '6%' }} className="hidden-paragraph">
                            Egestam och Mattsson erbjuder specialanpassade installationstjänster för moderna värmesystem, smarta hem, effektiva <br /> kontorslösningar, avancerade säkerhetssystem och omfattande datainstallationer. Vår breda erfarenhet garanterar <br /> installationer som inte bara ökar komforten utan även energieffektiviteten och säkerheten i din fastighet. Vi engagerar oss i <br /> ett nära samarbete med våra kunder för att förstå deras unika behov, säkerställa funktionell och estetiskt tilltalande design <br /> och implementera de senaste innovationerna. Från grundlig planering till precision i utförandet, är vårt expertteam dedikerat <br /> till detaljer och de högsta standarderna av säkerhet och hållbarhet. Kontakta Egestam och Mattsson för att utforska hur vi <br /> kan transformera ditt utrymme till en intelligent och energismart miljö.  </p>
                        <Row id="buttonRow12" style={{ marginLeft: '9%', display: 'none', marginTop: '5%' }}>
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

                {/* accordion finish  */}
                <div className='fifthdiv pt-5 pb-5'>
                    <div className='container w-75 text-center' style={{ color: 'rgba(0, 53, 78, 1)' }}>
                        <h3 className='pb-3'>Norden ställer om till klimatneutrala samhällen. Egestam & Mattsson bistår dig som kund i att utveckla fastigheter och infrastruktur som förbättrar samhällets funktion nu och för framtiden.</h3>
                        <p className='text-center'><u>Så här jobbar vi  med hållbarhet</u> </p>
                    </div>
                </div>

                <div className='sixthdiv  pt-5 ps-5 pb-5 sixthdiv_ipad'>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='container w-75'>
                                <h2 className='pb-3'>Energieffektiva lösningar inom elinstallation</h2>
                                <p className='pb-3'>Eftersom energikostnaden är löpande blir energioptimering en investering
                                    både för dig och för miljön. Genom att underhålla, uppgradera och
                                    digitalisera fastigheter kan vi minska din energianvändning.  Låt oss på
                                    Egestam & Mattsson ge förslag på lösningar och göra konkreta insatser.
                                </p>
                                <button type="button" class="block">Så här jobbar vi med energioptimering <img src="https://i.postimg.cc/3xBtkBZs/after.png" alt="" /> </button>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='container w-75'>
                                <img style={{ width: '85%', height: '75%' }} src="https://i.postimg.cc/nrLtjr8x/automation-tjej-display690x460px-jpg.png" alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>


                <div>
                    <Row className='pt-5 pb-5 ps-5'>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className='container w-75'>
                                <img style={{ width: '85%', height: '75%' }} src="https://i.postimg.cc/FHvq61Rx/Rectangle-6.png" alt="" />
                                <h2 className='pt-3' style={{ color: 'rgba(0, 58, 58, 1)' }}>VÅRT MOTTO</h2>
                                <p style={{ fontFamily: 'Roboto', fontSize: '20px' }}>Kontrollerad riskhantering med förankring i god affärsetik</p>
                                <p style={{ fontFamily: 'Roboto' }} className='pt-2'>Egestam och Mattsson strävar efter att generera stark avkastning genom en stabil ekonomisk tillväxt. Vår verksamhet präglas av en noggrant kontrollerad riskhantering med förankring i god affärsetik. Ett centralt fokus i vår affärsstrategi är att aktivt minska vår miljöpåverkan, vilket vi ser som en avgörande aspekt för att främja en hållbar framtid.</p>

                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className=''>
                                <img style={{ width: '100%', height: '150%' }} src="https://i.postimg.cc/wTdMZDsP/Group-45.png" alt="" />
                            </div>

                        </Col>
                    </Row>
                    <div className='ps-5'>
                        <Row className='pt-5 container ps-5'>
                            <h3 className='ps-4' style={{ color: 'rgba(0, 58, 58, 1)', position: 'relative', fontFamily: 'Roboto' }}>Nyheter</h3>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className='container ' style={{ color: ' rgba(0, 53, 78, 1)' }}>

                                    <img style={{ width: '100%', height: '100%' }} src="https://i.postimg.cc/gjgqLHw2/DALL-E-2024-01-24-15-03-12-Create-an-image-of-a-stylized-residential-and-commercial-area-depicting.png" alt="" />
                                    <p style={{ fontSize: '11.59px', color: ' rgba(114, 114, 114, 1)' }}>NYHETER</p>
                                    <p style={{ fontSize: '10.39px', color: ' rgba(114, 114, 114, 1)' }}>2023-11-21 08:00</p>
                                    <h1 className='w-100'>Optimerade miljöer för ett hållbart liv</h1>
                                    <p className=''>Med teknikens framsteg utrustas fastigheter med avancerade funktioner. Grundläggande system såsom el, VVS, uppvärmning, kylning, ventilation, belysning, brandskydd, säkerhet och låssystem kompletteras Egestam och Mattsson stor vikt vid att ständigt Egestam och Mattsson stor vikt vid att ständigt nu med smarta lösningar. Digitalisering och hållbarhet leder utvecklingen med automation, effektiv energianvändning, solenergisystem och laddningsstationer för eldrivna fordon, vilket speglas i vår strävan efter att skapa integrerade, energieffektiva byggnader. Läs mer om hur vi kan hjälpa dig som fastighetsägare till en optimerad miljö.</p>
                                    <div>
                                        <p style={{ fontSize: '15px', position: 'relative', left: '75%', color: 'linear-gradient(0deg, #0000C8, #0000C8),linear-gradient(0deg, #00354E, #00354E);' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className='container' style={{ color: ' rgba(0, 53, 78, 1)' }}>
                                    <img src="https://i.postimg.cc/V6NLC5zR/Link-bb4557f2b401689c-org-jpg.png" style={{ width: '100%', height: '200px' }} alt="" />
                                    <p style={{ fontSize: '11.59px', color: ' rgba(114, 114, 114, 1)' }}>NYHETER</p>
                                    <p style={{ fontSize: '10.39px', color: ' rgba(114, 114, 114, 1)' }}>2023-11-21 08:00</p>
                                    <h1 className='w-100'>Elektrifiering och framtidssäkring </h1>
                                    <p style={{ fontSize: '20px' }}>Egestam och Mattsson leder vägen i digitaliseringens era</p>
                                    <p style={{ fontSize: '15px', color: 'rgba(0, 0, 0, 1)' }}>I en tid där digitalisering och teknologisk innovation formar vårt samhälle, lägger Egestam och Mattsson stor vikt vid att ständigt vara i framkant. Med insikt om de framväxande trenderna - ökad elkonsumtion, ett starkare hållbarhetsfokus, och digitalisering - förstår Egestam & Mattsson vikten av att kontinuerligt kompetensutveckla sin personal. Genom att investera i utbildning och specialisering inom områden som integrerade system och effektiva energilösningar, positionerar Egestam och Mattsson sig för att möta marknadens behov och vara en nyckelaktör i att forma en mer hållbar och effektiv framtid.</p>
                                    <div className='pt-4'>
                                        <p style={{ fontSize: '15px', position: 'relative', left: '75%' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className='' style={{ color: ' rgba(0, 53, 78, 1)' }}>
                                    <img className='pb-5' style={{ width: '100%', height: '100%' }} src="https://i.postimg.cc/YSJBpxdQ/Grundkraft-Gasellvinnare-2021-2022-2023-3.png" alt="" />
                                    <h1 className='pt-5' style={{ position: 'relative', top: '30%' }}>Vinnare av DI-GASELL</h1>
                                    <p style={{ fontSize: '20px' }}>Egestam och Mattsson</p>
                                    <p style={{ fontSize: '20px', position: 'relative', bottom: '17px' }}> utmärker sig återigen</p>
                                    <p style={{ color: 'rgba(0, 0, 0, 1)', position: 'relative', bottom: '11px', fontSize: '15px' }}>Egestam och Mattsson har än en gång bevisat sin förmåga att överträffa marknadens förväntningar genom att vinna det prestigefyllda DI-Gasell-priset. Denna utmärkelse, som ges till Sveriges snabbast växande företag, speglar deras konsekventa tillväxt och framgång i branschen. Genom att fokusera på innovation, kundservice och hållbarhet, har Egestam och Mattsson inte bara förbättrat sin marknadsposition utan också bidragit till positiva samhällsförändringar. Denna prestation betonar vår starka drivkraft och engagemang för att kontinuerligt utvecklas och leda vägen inom el- och datanätverksinstallation.</p>
                                    <div className='pt-4' style={{ position: 'relative', top: '12px' }}>
                                        <p style={{ fontSize: '15px', position: 'relative', left: '75%' }}>Läs mer<i class="fa-solid fa-angles-right"></i></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className='seventhdiv ps-5 pb-5'>
                    <Row className='container'>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <h2 className='ps-5' style={{ color: 'rgba(0, 58, 58, 1)', fontFamily: 'Roboto' }}>Projekt</h2>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <h2 style={{ color: 'rgba(0, 58, 58, 1)', position: 'relative', left: '200px', fontFamily: 'Inter' }}>Hör av dig till oss</h2>
                        </Col>
                    </Row>

                    <Row className='pt-2 container ps-5'>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className=' ' style={{ color: ' rgba(0, 53, 78, 1)' }}>

                                <img style={{ width: '100%', height: '100%' }} src="https://i.postimg.cc/qRb7j29m/Link-solhem-skanska-4-jpg.png" alt="" />
                                <a href="asdf" style={{ textDecoration: 'none', color: 'rgba(114, 114, 114, 1)' }}> MALMO, SODERTALJE</a>
                                <h3 style={{ color: 'rgba(0, 58, 58, 1)', fontFamily: 'Inter' }}>Konstent att bygga prisvärda & hållbara förskolor</h3>

                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className=' '>

                                <img style={{ width: '100%', height: '100%' }} src="https://i.postimg.cc/qRb7j29m/Link-solhem-skanska-4-jpg.png" alt="" />
                                <a href="asdf" style={{ textDecoration: 'none', color: 'rgba(114, 114, 114, 1)' }}> MALMO, SODERTALJE</a>
                                <h3 style={{ color: 'rgba(0, 58, 58, 1)', fontFamily: 'Inter' }}>Konstent att bygga prisvärda & hållbara förskolor</h3>

                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <div className=''>
                                <img className='pb-5' style={{ width: '100%', height: '255px' }} src="https://i.postimg.cc/nLczfdYF/bravida-5180-690x460px-jpg.png" alt="" />
                                <h3 style={{ color: 'rgba(0, 58, 58, 1)', fontFamily: 'Inter', position: 'relative', bottom: '35px' }}>Behöver du hjälp med något?
                                    Kontakta oss idag!</h3>
                                <Row style={{ position: 'relative', bottom: '35px' }}>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div className='pe-2'>
                                            <img src="https://i.postimg.cc/x1RMddsy/Link.png" style={{ width: '115%', height: '100%' }} alt="" />
                                        </div>
                                    </Col>
                                    <Col lg={6} md={6} sm={6} xs={6}>
                                        <div className='ps-2'>
                                            <img src="https://i.postimg.cc/cLstPSsK/Link-1.png" style={{ width: '100%', height: '100%' }} alt="" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='eighthdiv pt-5  pb-5'>
                    <div className='transparancy'>
                        <Row>
                            <Col lg={8} md={8} sm={8} xs={8}>
                                <div style={{ color: 'white' }} className='container ps-5 pt-5'>
                                    <h3>Vi gör skillnad</h3>
                                    <h1>Egestam & Mattsson satsar på en hållbar affär</h1>
                                    <div className=' w-75' style={{ fontFamily: 'Roboto' }}>
                                        <h2>Hållbar framtid en del ev vår affär vår policy för att bidra till de Globala Målen</h2>
                                    </div>
                                    <div>
                                        <p>Egestam och Mattsson har antagit en policy som aktivt stödjer de globala målen för hållbar utveckling. Denna policy innefattar åtaganden att minska miljöpåverkan från verksamheten, främja energieffektivitet i alla projekt, och bidra till att bygga hållbara samhällen. Företaget strävar efter att integrera hållbara metoder i alla aspekter av sin affärsmodell, från design och installation till drift och underhåll. Genom att arbeta nära med kunder och samarbetspartners, siktar Egestam och Mattsson på att vara en drivkraft för positiv förändring och innovation inom sitt område, i linje med de globala hållbarhetsmålen.</p>
                                    </div>
                                    <div>
                                        <a href="asds" style={{ position: 'relative', left: '250px' }}><img src="https://i.postimg.cc/wjRkBdSW/Link-2.png" alt="" /></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={4}>
                                <div className='pe-2'>
                                    <img style={{ position: 'absolute', top: '10%', width: '31%', height: '67%' }} src="https://i.postimg.cc/JzWZZgv4/Figure-karta-globala-malen-logo-och-ikoner-jpeg.png" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
{/* footer  */}
<div>
            <div className='ft  pb-3'>
                <Row className='pb-1'>
                    <Col lg={3} md={6} sm={6} xs={12} className='order-2 order-md-1 order-sm-1'>
                        <div className='text-start ps-4 pt-3 '>
                            <h3>Kontakt</h3>
                           
                            <div className='line-spacing-mobile'>
                            <p className='fcp2'>Egestam Mattsson El & Data AB</p>
                            <p className='fcp2'>Ridspögatan 15a</p>
                            <p className='fcp2'>213 77 Malmö</p>
                            </div>
                            <div className='line-spacing-mobile pt-3'>
                            <p className='fcp3'>Tel: 040-6170166</p>
                            <p className='fcp3'>E-post: info@emeldata.se </p>
                            </div>
                            <p className='fcp3 privacypolicy-align pt-3'>Integritetspolicy</p>
                        </div>
                      
                        <hr className='hr-in-desktop'/>
                    </Col>
                    <Col lg={3} md={6} sm={6} xs={12} className='secrow text-start order-3 order-md-3 order-sm-2'>
                        <Row style={{ fontSize: '120%', position: 'relative', top: '3%' }} className='ps-3 pt-5 '>
                            <Col lg={6} md={6} sm={6} xs={6} className='custom-div-mobile'>
                                <div className='w-100 conatiner second-paragraph'>
                                    <b><p>Meny</p></b>
                                    <p>Hem</p>
                                    <p>Hållbarhet</p>
                                    <p>Tjänter</p>
                                    <p>Kontakta oss</p>
                                    <p>Jobba med oss</p>
                                </div>
                                <div className='w-100 conatiner paragraph'>
                                    <b><p>Meny</p></b>
                                    <p>Vårt erbjudande</p>
                                    <p>Hållbarhet</p>
                                    <p>Jobba hos oss</p>
                                    <p>Om oss</p>
                                    <p>Kontakta oss</p>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}  className='custom-div-mobile'>
                                <div className='w-100 conatiner ms-3 '>
                                    <b><p style={{ display: 'inline-flex', alignItems: 'center' }}>Din integritet</p></b>
                                    <p>Integritetspolicy</p>
                                    <p>Cookiepolicy</p>
                                    <p style={{ display: 'inline-flex', alignItems: 'center',gap: '5px' }}><img src="https://i.postimg.cc/90r8QxHk/List-Item-Link-SVG.png"  alt="Facebook" /> Facebook</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={3} md={3} sm={6} xs={12} className="d-none d-lg-block order-4 order-sm-3 pt-3 container">
                        <div className='ps-5'>
                            <h3 className='text-start'>Gasellvinnare</h3>
                            <img src="https://i.postimg.cc/qBcnd43C/Grundkraft-Gasellvinnare-2021-2022-2023-1.png" alt=""
                                style={{ position: 'relative', right: '10%' }} />
                            <div className='w-100  text-start'>
                                <p style={{ fontSize: '80%' }}>Med målet att vara marknadsledande, kombinerar Egestam och Mattsson expertkunskap, engagemang och innovation för att bygga varaktiga kundrelationer och leverera arbete med fokus på kvalitet, miljömedvetenhet och säkerhet.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={3} xs={12} className=' order-1 order-lg-4 order-md-2 order-sm-4  custom-right-align-tablet custom-right-align-mobile'>
                        <div className='custom-image-align-tablet pt-5'>
                            <img className='pt-4 top-align' src="https://i.postimg.cc/tCtLPZVC/image-3.png" alt="" />
                        </div>
                    </Col>
                </Row>
                
                <Row className='text-center cprow d-none d-lg-block' >
                    <Col lg={12} md={12} sm={12} xs={12}>
                    <hr className='w-75 container' />
                        Copyright © 2024 All rights reserved.
                    </Col>
                </Row>
            </div>
        </div>
            </div>


{/* Tablet View  */}
<div className='tablet_view'>
<HomeTablet></HomeTablet>
</div>
{/* Tablet view end  */}

{/* mobile view  */}
<div className='mobile_view'>
<HomeMobile></HomeMobile>
</div>

        </div>
    )
}

export default Home