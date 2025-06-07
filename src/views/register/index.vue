<script setup>
import { ref } from 'vue'

const form = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const errors = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const isSubmitting = ref(false)

const validateForm = () => {
  let isValid = true

  // 重置错误信息
  errors.value = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  // 验证用户名
  if (!form.value.username.trim()) {
    errors.value.username = '用户名不能为空'
    isValid = false
  } else if (form.value.username.length < 4) {
    errors.value.username = '用户名至少需要4个字符'
    isValid = false
  }

  // 验证邮箱
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.value.email.trim()) {
    errors.value.email = '邮箱不能为空'
    isValid = false
  } else if (!emailRegex.test(form.value.email)) {
    errors.value.email = '请输入有效的邮箱地址'
    isValid = false
  }

  // 验证密码
  if (!form.value.password) {
    errors.value.password = '密码不能为空'
    isValid = false
  } else if (form.value.password.length < 6) {
    errors.value.password = '密码至少需要6个字符'
    isValid = false
  }

  // 验证确认密码
  if (form.value.password !== form.value.confirmPassword) {
    errors.value.confirmPassword = '两次输入的密码不一致'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // 这里替换为实际的注册API调用
    // const response = await registerUser(form.value)
    console.log('注册数据:', form.value)

    // 模拟API延迟
    // await new Promise(resolve => setTimeout(resolve, 1000))

    alert('注册成功！')
    // 重置表单
    form.value = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  } catch (error) {
    console.error('注册失败:', error)
    alert('注册失败，请稍后再试')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="register-container">
    <div class="register-card">
      <h1 class="register-title">注册账号</h1>

      <form @submit.prevent="handleSubmit" class="register-form">
        <div class="form-group">
          <label for="username">用户名</label>
          <input
              id="username"
              v-model="form.username"
              type="text"
              placeholder="请输入用户名"
              :class="{ 'error-input': errors.username }"
          />
          <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
        </div>

        <div class="form-group">
          <label for="email">邮箱</label>
          <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="请输入邮箱"
              :class="{ 'error-input': errors.email }"
          />
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">密码</label>
          <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
              :class="{ 'error-input': errors.password }"
          />
          <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        </div>

        <div class="form-group">
          <label for="confirmPassword">确认密码</label>
          <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              type="password"
              placeholder="请再次输入密码"
              :class="{ 'error-input': errors.confirmPassword }"
          />
          <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
        </div>

        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="!isSubmitting">注册</span>
          <span v-else>注册中...</span>
        </button>
      </form>

      <div class="login-link">
        已有账号？<router-link to="/login">立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.register-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 450px;
}

.register-title {
  color: #2e7d32; // 深绿色
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #333;
    font-weight: 500;
  }

  input {
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: #4caf50; // 绿色
      box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    }

    &.error-input {
      border-color: #f44336;
    }
  }
}

.error-message {
  color: #f44336;
  font-size: 14px;
  margin-top: 4px;
}

.submit-btn {
  background-color: #4caf50; // 绿色
  color: white;
  border: none;
  padding: 14px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #388e3c; // 深绿色
  }

  &:disabled {
    background-color: #a5d6a7; // 浅绿色
    cursor: not-allowed;
  }
}

.login-link {
  text-align: center;
  margin-top: 20px;
  color: #666;

  a {
    color: #2e7d32; // 深绿色
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 480px) {
  .register-card {
    padding: 30px 20px;
  }

  .register-title {
    font-size: 24px;
  }
}
</style>