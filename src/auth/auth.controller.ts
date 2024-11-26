import { Body, Controller, Get, Post } from "@nestjs/common";
import { PhoneDTO } from "./phoneDTO";
import { JwtService } from "@nestjs/jwt";



@Controller()
export class AuthController {

  constructor(private jwtService: JwtService){};
  @Get()
  validNumber(@Body() phone: PhoneDTO){
    return true;
  }

  @Post()
  validSMS(@Body() phone: PhoneDTO){
    const payload = { sub: phone.phone, sms: phone.sms };
    return {
      access_token: this.jwtService.signAsync(payload, ),
    };
  }

}