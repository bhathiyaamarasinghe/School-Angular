import { Component, OnInit } from '@angular/core';
import { MarksTableService } from '../marks-table.service';

@Component({
  selector: 'app-marks-table',
  templateUrl: './marks-table.component.html',
  styleUrls: ['./marks-table.component.css']
})
export class MarksTableComponent implements OnInit {
 myMarkTable =[];
 studentId: string;
 studentName: string;
 studentMaths: string;
 studentScience: string;
 studentEnglish: string;

  constructor(
    private  marksTableService: MarksTableService

  ) { }

  ngOnInit(): void {
      this.getMyMarkTable();
      // console.log('gdjdjdk');
    }

    getMyMarkTable() {
      this.marksTableService.getMarks().subscribe((res: any) => {
     // console.log('My response');
       //  console.log(res);

          this.myMarkTable = res.data;
        //console.log(this.myMarkTable);
  
      });
    }
      addMarks(){
        let newMark ={
          name: this.studentName,
          maths: this.studentMaths,
          science: this.studentScience,
          english: this.studentEnglish
        }

        //console.log(newMark);

      this.marksTableService.addMarks(newMark).subscribe((res: any) => {
        //console.log(res);
        this.getMyMarkTable();
        this.studentName = "";
        this.studentMaths = "";
        this.studentScience = "";
        this.studentEnglish = "";
        });
      }
  


}
