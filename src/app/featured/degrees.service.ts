import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DegreesService {

  constructor() {}

  degrees = ["Business", "Completion", "Criminal Justice", "Education", "Humanities & Social Sciences",
    "Public Service", "Science"]
    
}
