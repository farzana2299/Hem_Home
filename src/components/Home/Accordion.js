import React from 'react'
import { Row } from 'react-bootstrap';

function Accordion() {
    function toggleParagraph(sectionNumber) {
        var paragraph = document.getElementById('paragraph' + sectionNumber);
        var buttonRow = document.getElementById('buttonRow' + sectionNumber);

        // Toggle the visibility of the paragraph and buttonRow
        var isHidden = paragraph.style.display === 'none';
        paragraph.style.display = isHidden ? 'block' : 'none';
        buttonRow.style.display = isHidden ? 'block' : 'none';
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Initially hide the paragraph and buttonRow
        var paragraph = document.getElementById('paragraph10');
        var buttonRow = document.getElementById('buttonRow10');
        paragraph.style.display = 'none';
        buttonRow.style.display = 'none';

        // Add event listener to the arrow button to toggle paragraph visibility
        var arrowButton = document.querySelector('.fa-angle-down');
        arrowButton.addEventListener('click', function () {
            toggleParagraph(10);
        });
    });

  return (
    <div>
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
                <div className='section' style={{ backgroundColor: '#89BF50',position:'relative',bottom:'5.5px' }}>
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

                <div className='section' style={{ backgroundColor: '#00354E',position:'relative',bottom:'11px' }}>
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

    </div>
  )
}

export default Accordion