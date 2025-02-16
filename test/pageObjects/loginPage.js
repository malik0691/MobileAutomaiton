const Page = require('./page');

class loginPage extends Page {
    get btnSignUpContainer () {
        return $('//*[@content-desc="button-sign-up-container"]');
    }

    get inputEmail () {
        return $('~input-email');
    }

    get inputPassword () {
        return $('~input-password');
    }

    get inputRepeatPassword () {
        return $('~input-repeat-password');
    }

    get btnSignUp () {
        return $('//*[@content-desc="button-SIGN UP"]');
    }

    get popupSignupSuccessMessage() {
        return $('//*[@resource-id="android:id/message"]');
    }

    async signUp (email, password) {
        await super.loginWidget.click();
        await this.btnSignUpContainer.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputRepeatPassword.setValue(password);
        await this.btnSignUp.click();
    }
}

module.exports = new loginPage();