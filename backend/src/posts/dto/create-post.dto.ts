import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  title: string;
  @MinLength(3)
  @MaxLength(500)
  @IsNotEmpty()
  @IsString()
  body: string;

  categories: string[];
}
