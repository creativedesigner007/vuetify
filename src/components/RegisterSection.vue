<template>
    <div class="login-register form-area form-style-2">
        <div class="container">
            <div class="form-wrap">
                <div class="row">
                    <div class="col-lg-7 ms-auto me-auto">
                        <form id="contact-form" class="form" action="#">
                            <div class="form-field">
                                <input type="text" placeholder="First Name" class="input-field">
                            </div>
                            <div class="form-field">
                                <input type="text" placeholder="Last Name" class="input-field">
                            </div>
                            <div class="form-field">
                                <input type="text" name="con_email" placeholder="Enter Email" class="input-field">
                            </div>
                            <div class="form-field">
                                <input type="password" name="con_subject" placeholder="Password" class="input-field">
                            </div>
                            <div class="form-field">
                                <input type="password" name="con_subject" placeholder="Confirm Password" class="input-field">
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">I read and agree to Terms & Conditions</label>
                            </div>
                            <div class="form-check ps-0 mt-3">
                                <router-link class="form-check-label" to="/login">Back to Login</router-link>
                            </div>
                            <div class="form-btn-wrap">
                                <button type="submit" value="submit" class="form-btn" name="submit">
                                    Register
                                </button>
                                <p class="form-messege"></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>