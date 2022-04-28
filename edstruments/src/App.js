import './App.css';
import TableData from './table';

function App() {
  return (
    <div className="App">
      <div class="mdc-tab-bar" role="tablist">
        <div class="mdc-tab-scroller">
          <div class="mdc-tab-scroller__scroll-area">
            <div class="mdc-tab-scroller__scroll-content">
              {/* INSERT LOGO HERE */}
              <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
                  <span class="mdc-tab__text-label">Dashboard</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>

              <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
                  <span class="mdc-tab__text-label">Resources</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>

              <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
                  <span class="mdc-tab__text-label">Budgets</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>

              <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
                  <span class="mdc-tab__text-label">Transactions/POs</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>

              <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
                  <span class="mdc-tab__text-label">Personnel</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>

              <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
                  <span class="mdc-tab__text-label">Schools</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>

              <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
                  <span class="mdc-tab__text-label">Assets</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>
              
              {/* INSERT DISTRICT INFO?*/}

              <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
                <span class="mdc-tab__content">
                  <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
                  <span class="mdc-tab__text-label">Login</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                  <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple"></span>
              </button>

            </div>
          </div>
        </div>
      </div>
      
      <h1>Please fill out the form to log your item!</h1>
      <TableData />    
    </div>
  );
}

export default App;
