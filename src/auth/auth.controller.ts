import { Body, Controller, Get, Headers, Post } from "@nestjs/common";
import { PhoneDTO } from "./phoneDTO";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {

  constructor(private jwtService: JwtService,
              private authService: AuthService) {
  };

  @Post("/task1")
  validNumber(@Body() phone: PhoneDTO) {
    return true;
  }

  @Post("/task2")
  async validSMS(@Body() phone: PhoneDTO) {
    return this.authService.generateJwt(phone);
  }

  @Get("/task3")
  async decodeToken(@Headers("token") token) {
    return this.authService.decodeJwt(token);
  }
}