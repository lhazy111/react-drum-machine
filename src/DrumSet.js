
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Drum from './Drum'

export default class DrumSet extends Component {
    constructor() {
        super();
        this.state = {
            pad: [
                { name: 'Q', sound: urls[0], soundname: 'Heater-1' },
                { name: 'W', sound: urls[1], soundname: 'Heater-2' },
                { name: 'E', sound: urls[2], soundname: 'Heater-3' },
                { name: 'A', sound: urls[3], soundname: 'Heater-4_1' },
                { name: 'S', sound: urls[4], soundname: 'Heater-6' },
                { name: 'D', sound: urls[5], soundname: 'Dsc_Oh' },
                { name: 'Z', sound: urls[6], soundname: 'Kick_n_Hat' },
                { name: 'X', sound: urls[7], soundname: 'RP4_KICK_1' },
                { name: 'C', sound: urls[8], soundname: 'Cev_H2' }
            ],
            displayed: "",

        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handlePress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handlePress);
    }

    handleClick = (id, element) => {
        console.log('handleclick id', id);
        console.log('handleclick element', element)
        const pathname = this.state.pad.find(obj => obj.name === id)
        this.flashpad(id)
        this.playSound(id);
        this.setState(prevState => {
            return { displayed: pathname.soundname };
        })
    }
    handlePress = (e) => {
        if ("QWEASDZXC".includes(e.key.toUpperCase())) {
            console.log('keyboard.pressed element', e);
            const pathname = this.state.pad.find(obj => obj.name === e.key.toUpperCase())
            console.log("associated object = ", pathname.soundname)
            this.flashpad(e.key.toUpperCase())
            this.playSound(e.key.toUpperCase())
            this.setState(prevState => {
                return { displayed: pathname.soundname };
            })
        } else {
            console.log('wrong button')
            this.setState(() => {
                return { displayed: "INACTIVE KEY" }
            })
        }

    }
    playSound = (sound) => {
        document.getElementById(sound).play()
    }

    flashpad = (id) => {
        console.log('id passed', id)
        const element = document.getElementById('drum' + id);
        element.style.backgroundColor = 'rgb(121, 245, 6)';
        setTimeout(() => {
            element.style.backgroundColor = 'rgb(78, 156, 0)';
            this.setState(() => {
                return { displayed: "" }
            })
        }, 200)
    }
    render() {
        return (
            <div className="pt-3" >

                <Container id="drum-machine" >
                    <Row className="d-flex justify-content-center">
                        <div id="display" className="d-flex align-items-center justify-content-center">
                            <h1 >{this.state.displayed}</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Drum pad={this.state.pad[0]} handleClick={this.handleClick} />
                            <Drum pad={this.state.pad[1]} handleClick={this.handleClick} />
                            <Drum pad={this.state.pad[2]} handleClick={this.handleClick} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Drum pad={this.state.pad[3]} handleClick={this.handleClick} />
                            <Drum pad={this.state.pad[4]} handleClick={this.handleClick} />
                            <Drum pad={this.state.pad[5]} handleClick={this.handleClick} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Drum pad={this.state.pad[6]} handleClick={this.handleClick} />
                            <Drum pad={this.state.pad[7]} handleClick={this.handleClick} />
                            <Drum pad={this.state.pad[8]} handleClick={this.handleClick} />
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

const urls = ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
]
