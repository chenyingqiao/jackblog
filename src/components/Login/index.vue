<template>
<div class="signin-box">
	<div class="signin-container">
		<div style="margin:0 auto;text-align: center;font-size: 2rem;margin-bottom: 20px;color:#de533a">
	    	<span class="title" @click="loginOrRegister=false">登 录</span>
	    	<span>|</span>
	    	<span class="title" @click="loginOrRegister=true">注 册</span>
		</div>
		<div v-show="!loginOrRegister">
			<div id="signinForm">
			    <validator name="signinValidation">
			      <form class="signin-form form-horizontal" @submit.prevent="login($signinValidation)" novalidate>
			    	    <div class="form-group">
			    	  		<div class="input-group">
			    	        <div class="input-group-addon">
			    	        	<i class="fa fa-envelope-o"></i>
			    	        </div>
			    	        <input type="text" 
			    	        	v-model="user.username" 
			    	        	v-validate:username="{ required: true, minlength: 3, maxlength: 30 }"
			    	        	class="form-control" 
			    	        	:class="[$signinValidation.username.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.username.dirty ? 'ng-dirty' : '']"
			    	        	placeholder="邮箱" />
			    	      </div>
			    	    </div>
			          <div class="form-group">
			        		<div class="input-group">
			              <div class="input-group-addon"><i class="fa fa-unlock-alt"></i></div>
			              <input type="password" 
			              	v-model="user.password" 
			              	v-validate:password="{ required: true }"
			              	class="form-control" 
			              	:class="[$signinValidation.password.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.password.dirty ? 'ng-dirty' : '']"
			              	placeholder="密码" />
			            </div>
			          </div>
			          <div class="form-group">
			          	<button class="btn btn-primary btn-lg btn-block" type="submit" id="signin_btn" :disabled="$signinValidation.invalid">登 录</button>
			          </div>
			    	</form>
			    </validator>
		    </div>
		</div>
		<div v-show="loginOrRegister">
			<div id="signinForm">
			    <validator name="signinValidation">
			      <form class="signin-form form-horizontal" @submit.prevent="login($signinValidation)" novalidate>
			    	    <div class="form-group">
			    	  		<div class="input-group">
			    	        <div class="input-group-addon">
			    	        	<i class="fa fa-envelope-o"></i>
			    	        </div>
			    	        <input type="text" 
			    	        	v-model="user.username" 
			    	        	v-validate:username="{ required: true, minlength: 3, maxlength: 30 }"
			    	        	class="form-control" 
			    	        	:class="[$signinValidation.username.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.username.dirty ? 'ng-dirty' : '']"
			    	        	placeholder="用户名" />
			    	      </div>
			    	    </div>
				        <div class="form-group">
				        	<div class="input-group">
				              <div class="input-group-addon"><i class="fa fa-unlock-alt"></i></div>
				              <input type="password" 
				              	v-model="user.password" 
				              	v-validate:password="{ required: true }"
				              	class="form-control" 
				              	:class="[$signinValidation.password.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.password.dirty ? 'ng-dirty' : '']"
				              	placeholder="密码" />
				          	</div>
			          </div>
			          <div class="form-group">
				        	<div class="input-group">
				              <div class="input-group-addon"><i class="fa fa-unlock-alt"></i></div>
				              <input type="password" 
				              	v-model="user.password_re"
				              	v-validate:password="{ required: true }"
				              	class="form-control" 
				              	:class="[$signinValidation.password.invalid ? 'ng-invalid' : 'ng-valid', $signinValidation.password.dirty ? 'ng-dirty' : '']"
				              	placeholder="重复密码" />
				          	</div>
			          </div>
			          <div class="form-group">
			          	<button class="btn btn-primary btn-lg btn-block" type="submit" id="signin_btn" :disabled="$signinValidation.invalid">注 册</button>
			          </div>
			    	</form>
			    </validator>
		    </div>
		</div>
	    <!-- <h4 class="title">登 录</h4> -->
		<div class="login-sns">
	      <p>您还可以通过以下方式直接登录!!!</p>
	      <snsloginbtns :logins="logins"></snsloginbtns>
	  	</div>
	</div>
</div>
</template>

<script>
import { getSnsLogins,getCaptchaUrl,localLogin,localRegister } from '../../vuex/actions'
import snsloginbtns from './snsLogin'

export default {
  el (){
    return '#signinForm'
  },
  components:{
    snsloginbtns
  },
  vuex:{
    getters:{
      captchaUrl: ({globalVal}) => globalVal.captchaUrl,
      logins: ({logins}) => logins.items,
      token: ({auth}) => auth.token
    },
    actions:{
      getSnsLogins,getCaptchaUrl,localLogin,localRegister
    }
  },
  validators: { 
    email: function (val) {
      return /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(val)
    }
  },
  data (){
    return {
      user:{
        username:'',
        password:'',
        password_re:'',
        grant_type:'password',
        client_id:1000002,
        client_secret:111111
      },
      loginOrRegister:true
    }
  },
  route: {
    activate:function (transition) {
      this.token?transition.redirect('/'):transition.next()
    }
  },
  created () {
    this.getCaptchaUrl()
    this.getSnsLogins()
  },
  methods: {
    login(signinValidation){
      if(signinValidation.valid){
      	if(this.user.password_re&&!this.loginOrRegister){
      		this.localRegister(this.user)
      	}else{
	        this.localLogin(this.user)
      	}
      }
    }
  }
}
</script>