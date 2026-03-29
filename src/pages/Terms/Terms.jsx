import "../Terms/Terms.scss"
import { Link } from "react-router-dom";

function Terms() {
    return(
        <div className="container">
             <div className="term-and-conditions gap-3 d-flex">
                <Link to="/terms" className="primary-button py-2 px-4">
                        Term & Conditions
                </Link>
                <Link to="/contact" className="primary-button py-2 px-4 bg-white btn-outline-secondary text-black">
                        Contact
                </Link>
            </div> 
            <div className="term-and-conditions-bg m-5 p-4 bg-white">
                    <h1 className="heading mb-4">Terms & Conditions</h1>
                    <p><strong>Last Updated:</strong> 22-02-2026</p>

                    <p>
                        Welcome to <strong>ESPORTS INDIA</strong>. 
                        By accessing or participating in tournaments on our platform, you agree to the following Terms & Conditions.
                    </p>

                    <h2>1. Eligibility</h2>
                    <ul>
                        <li>Participants must be at least 18 years old or have parental/guardian consent.</li>
                        <li>Users must provide accurate registration details.</li>
                        <li>Only one account per user is allowed.</li>
                        <li>We reserve the right to verify player identity at any time.</li>
                    </ul>

                    <h2>2. Tournament Registration</h2>
                    <ul>
                        <li>Registration is confirmed only after successful payment (if entry fee applies).</li>
                        <li>Tournament slots are limited and operate on a first-come, first-served basis.</li>
                        <li>Entry fees are non-refundable unless the tournament is canceled by us.</li>
                    </ul>

                    <h2>3. Tournament Rules</h2>
                    <ul>
                        <li>Players must follow the specific rules mentioned for each tournament.</li>
                        <li>Match timings must be strictly followed.</li>
                        <li>Failure to join within the given time may result in disqualification.</li>
                        <li>Players must use their registered in-game ID only.</li>
                    </ul>

                    <h2>4. Fair Play & Anti-Cheating Policy</h2>
                    <ul>
                        <li>Use of hacks, cheats, exploits, or third-party software is strictly prohibited.</li>
                        <li>Teaming in solo matches (if not allowed) is considered cheating.</li>
                        <li>Harassment, abusive language, or toxic behavior will not be tolerated.</li>
                        <li>We reserve the right to disqualify or ban any player suspected of unfair play without refund.</li>
                    </ul>

                    <h2>5. Prize Distribution</h2>
                    <ul>
                        <li>Prize money will be distributed within [X days] after tournament completion.</li>
                        <li>Winners must provide valid payment details.</li>
                        <li>Applicable taxes are the responsibility of the winner.</li>
                        <li>In case of disputes, the platform’s decision will be final.</li>
                    </ul>

                    <h2>6. Payment & Refund Policy</h2>
                    <ul>
                        <li>All payments must be made through approved payment methods listed on the platform.</li>
                        <li>Entry fees are non-refundable except if:
                        <ul>
                            <li>The tournament is canceled by us.</li>
                            <li>Technical failure from our side prevents match completion.</li>
                        </ul>
                        </li>
                    </ul>

                    <h2>7. Disqualification</h2>
                    <ul>
                        <li>Rule violations</li>
                        <li>Fraudulent payments</li>
                        <li>Impersonation</li>
                        <li>Multiple account usage</li>
                        <li>Cheating or match-fixing</li>
                    </ul>

                    <h2>8. Technical Issues</h2>
                    <ul>
                        <li>We are not responsible for internet connectivity issues.</li>
                        <li>We are not responsible for device malfunctions.</li>
                        <li>We are not responsible for game server downtime.</li>
                        <li>Matches may be rescheduled in case of server-wide issues.</li>
                    </ul>

                    <h2>9. Limitation of Liability</h2>
                    <p>
                        Participation is at your own risk. We are not responsible for any financial loss, 
                        account bans by game publishers, or personal damages. 
                        We are not affiliated with any game publisher unless officially stated.
                    </p>

                    <h2>10. Account Termination</h2>
                    <p>
                        We reserve the right to suspend or permanently terminate any account violating these terms without prior notice.
                    </p>

                    <h2>11. Amendments</h2>
                    <p>
                        We may update these Terms & Conditions at any time. Continued use of the platform means you accept the updated terms.
                    </p>

                   

            </div>
        </div>
    )
}

export default Terms