import Ember from 'ember';

export default Ember.Component.extend({
  opportunities: null,
  filteredOpportunities: null,
  width: null,
  height: null,
  legend: true,
  filterButtons: true,
  isShowingDayForecast: false,
  isShowingWeekForecast: false,
  isShowingMonthForecast: false,
  dayCharts: null,
  weekCharts: null,
  monthCharts: null,

  didReceiveAttrs: function() {
    this.set('dayCharts', {
      labels: ["6:00 AM", "12:00 AM", "6:00 PM", "12:00 PM"],
      datasets: [
          {
              label: "Deal 1",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [400, 600, 1200, 900]
          }
      ]
    });

    this.set('weekCharts', {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
          {
              label: "Deal 1",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [0, 0, 600, 900, 700]
          },
          {
              label: "Deal 2",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [500, 900, 0, 0, 0]
          }
      ]
    });

    this.set('monthCharts', {
      labels: ["09/01/2015", "09/04/2015", "09/10/2015", "09/17/2015", "09/21/2015", "09/27/2015", "09/30/2015"],
      datasets: [
          {
              label: "Deal 1",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [400, 600, 700, 900, 0, 0, 0]
          },
          {
              label: "Deal 2",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [0, 0, 0, 200, 400, 600, 0]
          },
          {
              label: "Deal 3",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [0, 0, 300, 500, 0, 0, 0]
          }
      ]
    });
    this.set('isShowingWeekForecast', false)
    this.set('isShowingMonthForecast', false);
    this.set('isShowingDayForecast', true);

  },

  actions: {

    filterByDay: function() {
      this.set('isShowingWeekForecast', false)
      this.set('isShowingMonthForecast', false);
      this.set('isShowingDayForecast', true);
    },

    filterByWeek: function() {
      this.set('isShowingDayForecast', false);
      this.set('isShowingMonthForecast', false);
      this.set('isShowingWeekForecast', true);
    },

    filterByMonth: function() {
      this.set('isShowingDayForecast', false);
      this.set('isShowingWeekForecast', false)
      this.set('isShowingMonthForecast', true);
    },

    filterByYear: function() {

    }
  }
});
