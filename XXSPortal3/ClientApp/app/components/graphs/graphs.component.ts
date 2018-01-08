﻿import { Component } from '@angular/core';


@Component({
    selector: 'app-graphs',
    templateUrl: './graphs.component.html',
    styleUrls: []
})
/** Graphs component*/
export class GraphsComponent {
    /** Graphs ctor */
    constructor() {

    }

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
    //    { // grey
    //        backgroundColor: 'rgba(148,159,177,0.2)',
    //        borderColor: 'rgba(148,159,177,1)',
    //        pointBackgroundColor: 'rgba(148,159,177,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //    },
    //    { // dark grey
    //        backgroundColor: 'rgba(77,83,96,0.2)',
    //        borderColor: 'rgba(77,83,96,1)',
    //        pointBackgroundColor: 'rgba(77,83,96,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(77,83,96,1)'
    //    },
    //    { // grey
    //        backgroundColor: 'rgba(148,159,177,0.2)',
    //        borderColor: 'rgba(148,159,177,1)',
    //        pointBackgroundColor: 'rgba(148,159,177,1)',
    //        pointBorderColor: '#fff',
    //        pointHoverBackgroundColor: '#fff',
    //        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    //    }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    public randomize(): void {
        let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }


    // Bar Chart

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // events
    public chartClicked2(e: any): void {
        console.log(e);
    }

    public chartHovered2(e: any): void {
        console.log(e);
    }

    public randomize2(): void {
        // Only Change 3 values
        let data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }


    // Doughnut
    public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';

    // events
    public chartClicked3(e: any): void {
        console.log(e);
    }

    public chartHovered3(e: any): void {
        console.log(e);
    }

    // Radar
    public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';

    // events
    public chartClicked4(e: any): void {
        console.log(e);
    }

    public chartHovered4(e: any): void {
        console.log(e);
    }

    // Pie
    public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';

    // events
    public chartClicked5(e: any): void {
        console.log(e);
    }

    public chartHovered5(e: any): void {
        console.log(e);
    }

    // PolarArea
    public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean = true;

    public polarAreaChartType: string = 'polarArea';

    // events
    public chartClicked6(e: any): void {
        console.log(e);
    }

    public chartHovered6(e: any): void {
        console.log(e);
    }

    // lineChart
    public lineChartData7: Array<any> = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    public lineChartLabels7: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartType7: string = 'line';
    public pieChartType7: string = 'pie';

    // Pie
    public pieChartLabels7: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData7: number[] = [300, 500, 100];

    public randomizeType(): void {
        this.lineChartType7 = this.lineChartType7 === 'line' ? 'bar' : 'line';
        this.pieChartType7 = this.pieChartType7 === 'doughnut' ? 'pie' : 'doughnut';
    }

    public chartClicked7(e: any): void {
        console.log(e);
    }

    public chartHovered7(e: any): void {
        console.log(e);
    }

    }

