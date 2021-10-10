import { Component } from "react";

import ProfileTemplate from '../../ComponentTemplates/ProfileTemplate/ProfileTemplate'

import auth from '../../../Service/auth';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: []
        }
    }

    componentDidMount() {
        auth.getAllProfiles()
            .then(profiles => {
                this.setState(() => ({ profiles }));
            })
    }

    render() {
        return (
            <div className="main-container">
                <section className="about-section">
                    <h2>MEMELANDIA</h2>
                    <p>inspired by facebook</p>
                    <p>All Users:</p>
                    <ul>
                        {this.state.profiles?.map(x =>
                            <ProfileTemplate
                                key={x._id}
                                data={x}
                            />
                        )}
                    </ul>
                </section>
            </div>
        )
    }
}

export default About;