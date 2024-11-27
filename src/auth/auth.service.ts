import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PhoneDTO } from "./phoneDTO";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService){};

  async generateJwt(phone: PhoneDTO){
    const payload = { sub: phone.phone, sms: phone.sms };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async decodeJwt(token){

    const decodedJwt = await this.jwtService.decode(token);

    return decodedJwt == null?new UnauthorizedException:decodedJwt;

  }
}