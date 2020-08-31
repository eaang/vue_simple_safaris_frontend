<template>
  <div class="contact-form container">

    <div class="w-3/5 mx-auto my-16">
      <!-- Contact Information -->
      <FormulateInput
        wrapper-class="mb-8"
        input-class="text-input"
        name="name"
        label="성함"
        placeholder="홍길동"
      />
      <FormulateInput
        wrapper-class="mb-8"
        input-class="text-input"
        name="phone"
        label="연락처"
        placeholder="010-1234-5678"
      />
      <FormulateInput
        wrapper-class="mb-8"
        input-class="text-input"
        name="email"
        label="이메일"
        placeholder="이메일 주소 입력"
      />

      <!-- Number of People -->
      <div class="adults mb-8">
        <div class="contact-group-label mb-2">
          희망 인원 수
        </div>

        <div class="grid grid-cols-2 gap-4">
          <FormulateInput
            label-class="text-lg"
            input-class="text-input"
            name="adult"
            label="성인"
            type="select"
            placeholder="-"
            :options="{ 
              1: '1', 2: '2', 3: '3', 4: '4', 5: '5',
              6: '6', 7: '7', 8: '8', 9: '9', 10: '10'}"
          />
          <FormulateInput
            label-class="text-lg"
            input-class="text-input"
            name="children"
            label="아동(13세 미만)"
            type="select"
            placeholder="-"
            :options="{
              0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5',
              6: '6', 7: '7', 8: '8', 9: '9', 10: '10'}"
          />
        </div>
      </div>

      <!-- Desired Dates -->
      <div class="dates mb-8">
        <div class="contact-group-label mb-2">
          희망 여행 일자
        </div>

        <div class="grid grid-cols-2 gap-4 mb-8">
          <div class="left-col">
            <FormulateInput
              label-class="text-lg"
              input-class="text-input"
              name="start"
              label="출발"
              type="date"
            />
            <FormulateInput
              wrapper-class="flex items-center mt-4 space-x-2"
              input-class="styled-checkbox"
              label-class="grey-text text-lg"
              v-model="value"
              type="checkbox"
              label="여행일자 미정"
            />
          </div>
          <FormulateInput
            label-class="text-lg"
            input-class="text-input"
            name="end"
            label="도착"
            type="date"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <FormulateInput
            input-class="text-input"
            name="days"
            label="희망 여행 일수"
            type="select"
            placeholder="-"
            :options="{}"
          />
          <FormulateInput
            input-class="text-input"
            name="budget"
            label="1인 여행 예산"
            type="select"
            placeholder="-"
            :options="{}"
          />
        </div>
      </div>

      <!-- Countries -->
      <FormulateInput
        v-model="value"
        element-class="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
        input-class="inline"
        :options="{
          탄자니아: '탄자니아', 케냐: '케냐', 남아공: '남아공', 보츠와나: '보츠와나',
          잠비아: '잠비아', 짐바브웨: '짐바브웨', 인도: '인도', 나미비아: '나미비아'
          }"
        type="checkbox"
        label="희망 여행 국가"
      />

      <!-- Trip Nature -->
      <FormulateInput
        v-model="value"
        :options="{
          해본적이있다: '해본 적이 있다', 
          지인중해본사람이있다: '지인 중 해본 사람이 있다', 
          개인적으로리서치는해보았다: '개인적으로 리서치는 해보았다', 
          전혀모른다: '전혀 모른다'}"
        type="radio"
        label="사파리여행에 대한 이해도"
      />

      <!-- Activities -->
      <FormulateInput
        v-model="value"
        :options="{
          승마사파리: '승마 사파리', 워킹사파리: '워킹 사파리', 야간사파리: '야간 사파리', 열기구탑승: '열기구 탑승',
          현지문화체험: '현지문화체험', 와인테이스팅: '와인 테이스팅', 리버크루즈: '리버 크루즈', 카누: '카누',
          헬리콥터탑승: '헬리콥터 탑승', 프라이빗사파리: '프라이빗 사파리', 추천요망: '추천 요망'
          }"
        type="checkbox"
        label="희망 여행 활동 선택"
      />

      <!-- Notes -->
      <FormulateInput
        type="textarea"
        placeholder="최대한 자세하게 서술해주세요"
        label="사파리여행에서 희망하는 점"
      />

      <FormulateInput
        type="submit"
        label="Send"
      />

    </div>

  </div>
</template>

<script>
</script>

<style>
  .contact-form {
    border-top: 3px solid #9c9780;
    border-bottom: 3px solid #9c9780;
    background-color: #F0F0ED;
  }
  .text-input {
    border: 1px solid #c7c7c1;
    @apply p-3 w-full mt-2;
  }
  .contact-group-label {
    @apply text-xl mb-4;
  }
  .grey-text {
    color: #c0c0c0;
  }
  .styled-checkbox {
    position: absolute;
    opacity: 0;
    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }
    & + label:before {
      content: '';
      border: 1px solid #c7c7c1;
      display: inline-block;
      vertical-align: text-top;
      width: 2rem;
      height: 2rem;
      background: white;
    }
    &:hover + label:before {
      background: #9c9780;
    }
    &:focus + label:before {
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
    }
    &:checked + label:before {
      background: #9c9780;
    }
    &:disabled + label {
      color: #b8b8b8;
      cursor: auto;
    }
    &:disabled + label:before {
      box-shadow: none;
      background: #ddd;
    }
  }
</style>