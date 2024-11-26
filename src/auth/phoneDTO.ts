import { IsIn, IsInt, IsOptional, IsPhoneNumber, IsPositive, Max, Min } from "class-validator";

export class PhoneDTO {

  @IsPhoneNumber("RU", {message: "Неправильный номер телефона"})
  phone: String;

  @IsOptional()
  @IsIn([55555], {message: "Неверный код!"})
  @Min(10000, {message: "Число должно быть 5-ти значным"})
  @Max(99999, {message: "Число должно быть 5-ти значным"})
  @IsInt({message: "Не целое число"})
  @IsPositive({message: "Число должно быть положительное"})
  sms: String

}