/**
 * Created by ahsan.zaman on 13/10/2017.
 */
import React from 'react';
export default class SocialAccounts extends React.Component {
    render() {
        const commonStyles = this.props.styles;
        const {category} = this.props;

        return (
            <div class={commonStyles.accountButtons}>
                <div class={commonStyles.accountButton}>
                    <button type="button"
                            class="btn btn-md btn-block social-login-button google"
                            data-type="login">
                        <i class="fa fa-google"></i>

                        {category} with Google

                    </button>
                </div>
                <div class={commonStyles.accountButton}>
                    <button type="button"
                            class="btn btn-md btn-block social-login-button linkedin"
                            data-type="login">
                        <i class="fa fa-linkedin"></i>

                        {category} with Linkedin

                    </button>
                </div>
                <div class={commonStyles.accountButton}>
                    <button type="button" class="btn btn-md btn-block social-login-button xing"
                            data-type="login">
                        <i class="fa fa-xing"></i>

                        {category} with Xing

                    </button>
                </div>

                <div class="clearfix"></div>
            </div>
        )
    }
}