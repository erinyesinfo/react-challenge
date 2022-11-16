import React, { Component } from 'react';
import { default as profile } from '../assets/profile.svg';

class Routing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matches576: window.matchMedia("(max-width: 576px)").matches,
            Position: 0,
            month: 12,
            day: 20
        };
    };
    componentDidMount() {
        window.addEventListener('resize', this.handler576);
        window.addEventListener('load', this.handler576);
        window.addEventListener('scroll', this.handler576);
    };
    componentWillUnmount() {
        window.removeEventListener('resize', this.handler576);
        window.removeEventListener('load', this.handler576);
        window.removeEventListener('scroll', this.handler576);
    };
    handler576 = () => this.setState({matches576: window.innerWidth <= 576});
    handleLeftArrow = () => {
        if (this.state.Position === 2) {
            this.setState(curState => ({ Position: curState.Position - 1 }));
        } else if (this.state.Position === 1) {
            this.setState(curState => ({ Position: curState.Position - 1 }));
        } else if (this.state.Position === 0) {
            this.setState({ Position: 2 });
        }
    };
    handleRighArrow = () => {
        if (this.state.Position === 0) {
            this.setState(curState => ({ Position: curState.Position + 1 }));
        } else if (this.state.Position === 1) {
            this.setState(curState => ({ Position: curState.Position + 1 }));
        } else if (this.state.Position === 2) {
            this.setState({ Position: 0 });
        }
    };
    handleBtnClicked = e => {
        if (e.target.name === "btn-0") {
            this.setState({ Position: 0 });
        } else if (e.target.name === "btn-1") {
            this.setState({ Position: 1 });
        } else if (e.target.name === "btn-2") {
            this.setState({ Position: 2 });
        }

    };
    handleChange = e => {
        if (e.target.name === "month") {
            const re = /^[0-9\b]+$/;
            // if value is not blank, then test the regex
            if (e.target.value === '' || re.test(e.target.value)) {
                const convertToInt = parseInt(e.target.value) < 13 && parseInt(e.target.value) > 0;
                if (convertToInt) {
                    this.setState({month: e.target.value})
                }
            }
        } else if (e.target.name === "day") {
            const re = /^[0-9\b]+$/;
            // if value is not blank, then test the regex
            if (e.target.value === '' || re.test(e.target.value)) {
                const convertToInt = parseInt(e.target.value) < 32 && parseInt(e.target.value);
                if (convertToInt) {
                    this.setState({day: e.target.value})
                }
            }
        }
    };
    render() {
        let leftCircle = {
            color: '#CDCBBC',
            position: 'absolute',
            fontSize: 28,
            marginRight: 400,
            marginTop: 25,
            cursor: 'pointer'
        };
        let rightCircle = {
            color: '#CDCBBC',
            position: 'absolute',
            fontSize: 28,
            marginLeft: 400,
            marginTop: 25,
            cursor: 'pointer'
        };
        if (this.state.matches576) {
            leftCircle = {
                ...leftCircle,
                marginRight: 300,
            };
            rightCircle = {
                ...rightCircle,
                marginLeft: 300,
            };
        }
        return (
            <div className='routing'>
                <div className='icons'>
                    {this.state.Position !== 0 ? (
                        <i className="fas fa-chevron-circle-left" style={leftCircle}
                            onClick={this.handleLeftArrow}></i>
                    ):null}
                    <hr />
                    <img src={profile} alt="profile" />
                    {this.state.Position !== 2 ? (
                        <i className="fas fa-chevron-circle-right" style={rightCircle}
                        onClick={this.handleRighArrow}></i>
                    ):null}
                </div>
                {this.state.Position === 0 ? (
                    <div className='form'>
                        <h2>What's your name?</h2>
                        <input className='input-name' type="text" placeholder='John Smith' />
                    </div>
                ):this.state.Position === 1 ? (
                    <div className='form'>
                        <h2>What do you need help with?</h2>
                        <span>(Choose all that apply)</span>
                        <div className='checkbox-container'>
                            <input id="option-a" type='checkbox' defaultChecked onChange={() => {}} />
                            <label htmlFor='option-a'>Option A</label>
                        </div>
                        <div className='checkbox-container'>
                            <input id="option-b" type='checkbox' />
                            <label htmlFor='option-b'>Option B</label>
                        </div>
                        <div className='checkbox-container'>
                            <input id="option-c" type='checkbox' defaultChecked onChange={() => {}} />
                            <label htmlFor='option-c'>Option C</label>
                        </div>
                        <div className='checkbox-container'>
                            <input id="option-d" type='checkbox' />
                            <label htmlFor='option-d'>Option D</label>
                        </div>
                    </div>
                ):this.state.Position === 2 ? (
                    <div className='form'>
                        <h2>What date?</h2>
                        <div className='date'>
                            <div className='date-containter'>
                                <div>Month</div>
                                <input type='text' name="month" onChange={this.handleChange} value={this.state.month} />
                            </div>
                            <div className='date-containter'>
                                <div>Day</div>
                                <input type='text' name="day" onChange={this.handleChange} value={this.state.day} />
                            </div>
                            <div className='date-containter'>
                                <div>Year</div>
                                <input className='input-year' type='text' onChange={() => {}} defaultValue="2022" />
                            </div>
                        </div>
                    </div>
                ):null}
                
                <div className='threedots'>
                    <button className={this.state.Position === 0 ? "btn-active":""} type='button'
                    onClick={this.handleBtnClicked} name="btn-0"></button>
                    <button className={this.state.Position === 1 ? "btn-active":""} type='button'
                    onClick={this.handleBtnClicked} name="btn-1"></button>
                    <button className={this.state.Position === 2 ? "btn-active":""} type='button'
                    onClick={this.handleBtnClicked} name="btn-2"></button>
                </div>
            </div>
        );
    };
};

export default Routing;