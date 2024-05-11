import React from 'react'
import './HomeMobile.css';
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

                    <div className='pt-5 ps-5 pe-5 text-white text-start mb-5 ' style={{ position: 'relative', top: '10%' }}>
                        <h1 style={{ fontSize: '20px', fontFamily: 'Inter' }}> EL,TEKNIK & INSTALLATIONER <br /> <h1 style={{ fontSize: '20px', fontFamily: 'Inter', position: 'relative', left: '10%' }}>FOR FRAMTIDEN MED </h1>
                            <span style={{ color: 'rgba(137, 191, 80, 1)', display: 'inline-flex', alignItems: 'center', position: 'relative', left: '10%' }}>HALLBARA FRAMSTEG</span> </h1>
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

            <div className='container' style={{ backgroundColor: 'rgba(137, 191, 80, 1)', color: 'white', fontFamily: 'Inter', width: '100%', height: '100%' }}>
                <p style={{ fontSize: '24px' }}>
                    Norden ställer om till klimatneutrala samhällen. Egestam & Mattsson bistår dig som kund i att utveckla fastigheter och infrastruktur som förbättrar samhällets funktion nu och för framtiden.
                </p>
            </div>

        </div>
    )
}

export default HomeMobile