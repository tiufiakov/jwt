import { Body, Controller, Get, Headers, Post } from "@nestjs/common";
import { PhoneDTO } from "./phoneDTO";
import { JwtService } from "@nestjs/jwt";



@Controller()
export class AuthController {

  constructor(private jwtService: JwtService) {
  };

  @Post("/task1")
  validNumber(@Body() phone: PhoneDTO) {
    return true;
  }

  @Post("/task2")
  async validSMS(@Body() phone: PhoneDTO) {
    const payload = { sub: phone.phone, sms: phone.sms };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  @Get("/task3")
  async decodeToken(@Headers("token") token) {
    return await this.jwtService.decode(token)
  }
}