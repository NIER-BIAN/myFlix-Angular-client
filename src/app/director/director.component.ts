import { Component, Inject } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
// extracts dialog info & closes the dialog
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrl: '../../styles.scss'
})
export class DirectorComponent {
    
    public director: any;
    public directorFullInfo: any; // Initialize an empty obj to store director data.
    
    constructor(
	@Inject(MAT_DIALOG_DATA) public data: any,
	public fetchApiData: FetchApiDataService,
	public dialogRef: MatDialogRef<DirectorComponent>
    ) {
	// Access the data passed from the parent component
	this.director = this.data.director;
	// Fetch data straight away
	this.getDirectorInfo(this.director.name)
    }

    public getDirectorInfo(directorName: string): void {
	this.fetchApiData.getDirector(this.director.name).subscribe((response: any) => {
	    // rename res as per what view is expecting
	    this.directorFullInfo = response;
	});
    }

    //Close the dialog 
    public close(): void {
        this.dialogRef.close();
    }

}
