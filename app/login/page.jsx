import React from "react";
import AuthBtn from "../ui/AuthBtn";

const Login = () => {
  return (
    <div className="mt-[83px] lg:mt-[151.57px] xl:mt-[96.57px] mb-[75px] lg:mb-[122.14px] xl:mb-[102px] px-[25px] lg:px-[58.15px] xl:px-[374px] flex flex-col justify-center items-center">
      <div className="text-center font-bold w-[261px] lg:w-[770px] xl:w-[502px] text-[20px] lg:text-[64px] xl:text-[55px]">
        <p>Dive into a World of Possibilities</p>
      </div>

      <div className="w-[380px] lg:w-[901.846px] xl:w-[693px] rounded-[28.5px] lg:rounded-[53.4px] xl:rounded-[41px] border-[3px] lg:border-[5.21px] xl:border-[4px] mt-[33px] lg:mt-[87px] xl:mt-[58px] shadow-[0_2.781px_2.781px_0px_rgba(0,0,0,0.25)] lg:shadow-[0_5.205px_5.205px_0px_rgba(0,0,0,0.25)] xl:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] border-primaryPink flex flex-col justify-center items-center">
        <p className="lg:hidden xl:block text-center font-bold text-[13.9px] xl:text-[20px] leading-[14.734px] xl:leading-[21.2px] mt-[52px] xl:mt-[32px]">
          Log in to your account to continue
        </p>

        <form className="flex flex-col w-full mt-[48px] lg:mt-[107px] xl:mt-[37px] px-[51px] lg:px-[187.4px] xl:px-[144px]">
          <div className="lg:w-[527.053px] xl:w-[405px] flex flex-col justify-start items-end">
            <div className="flex justify-center items-center">
              <label className="font-medium text-[14px] lg:text-[20.822px] xl:text-[16px] text-start lg:mr-[28.38px] xl:mr-[22px] leading-[14.84px] lg:leading-[22.071px] xl:leading-[16.96px]">
                Email
              </label>
              <input
                className="w-full lg:w-[408.629px] xl:w-[314px] h-[32px] lg:h-[46.849px] xl:h-[36px] border-[2px] lg:border-[3.9px] xl:border-[3px] rounded-[9.73px] lg:rounded-[18.2px] xl:rounded-[14px] mt-[18px] lg:mt-0 border-primaryPink"
                type="text"
              />
            </div>

            <div className="flex justify-center items-center">
              <label className="font-medium text-[14px] lg:text-[20.822px] xl:text-[16px] lg:mr-[28.38px] xl:mr-[22px] leading-[14.84px] lg:leading-[22.071px] xl:leading-[16.96px] mt-[42px] lg:mt-[31.23px]">
                Password
              </label>
              <input
                className="w-full lg:w-[408.629px] xl:w-[314px] h-[32px] lg:h-[46.849px] xl:h-[36px] border-[2px] lg:border-[3.9px] xl:border-[3px] rounded-[9.73px] lg:rounded-[18.2px] xl:rounded-[14px] mt-[18px] lg:mt-[31.23px] border-primaryPink"
                type="password"
              />
            </div>
          </div>

          <div className="px-[16px] mt-[35px] lg:mt-[48.15px] xl:mt-[32px] text-[10px] lg:text-[13.014px] xl:text-[10px] leading-[10.6px] lg:leading-[13.794px] xl:leading-[10.6px] gap-[68px] lg:gap-[95.51px] xl:gap-[73px] w-full flex justify-center items-center font-normal">
            <p>Forgot Password?</p>

            <div className="flex justify-center items-center gap-[9px] lg:gap-[11.6px] xl:gap-[9px]">
              <p>Remember Me</p>
              <input
                type="checkbox"
                className="w-[20px] lg:w-[26.027px] xl:w-[20px] h-[20px] lg:h-[26.027px] xl:h-[20px] rounded-[6px] lg:rounded-[7.81px] xl:rounded-[6px] border-[1px] lg:border-[1.3px] xl:border-[1px] accent-primaryPink border-primaryPink"
              />
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-[55px] lg:mt-[45.86px] xl:mt-[31px] mb-[59px] lg:mb-[56.97px] xl:mb-[36px]">
            <AuthBtn title="Login" />
          </div>
        </form>
      </div>

      <div className="text-[14px] lg:text-[18.219px] xl:text-[14px] leading-[14.84px] lg:leading-[19.312px] xl:leading-[14.84px] mt-[42px] lg:mt-[128.29px] xl:mt-[64px] gap-[31px] lg:gap-[398.03px] xl:gap-[306px] flex flex-col lg:flex-row justify-center items-center">
        <p>Don&apos;t have an account?</p>
        <p>Need Help?</p>
      </div>
    </div>
  );
};

export default Login;
