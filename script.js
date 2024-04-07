$(document).ready(() => {
    const input = $("#input");
    const output = $("#output");

    var  render = "";

    $('button').click(e => {
        let btnId = e.target.id;
        switch (btnId) {
            case "CE":
                updateDisplay({ clr: true });
                break;
            case "delete":
                updateDisplay({ del: true });
                break;
            case "add":
                updateDisplay({ data: "+" });
                break;
            case "sub":
                updateDisplay({ data: "-" });
                break;
            case "mul":
                updateDisplay({ data: "*" });
                break;
            case "div":
                updateDisplay({ data: "/" });
                break;
            case "dot":
                updateDisplay({ data: '.'});
                break;
            case "number9":
                updateDisplay({ data: 9 });
                break;
            case "number8":
                updateDisplay({ data: 8 });
                break;
            case "number7":
                updateDisplay({ data: 7 });
                break;
            case "number6":
                updateDisplay({ data: 6 });
                break;
            case "number5":
                updateDisplay({ data: 5 });
                break;
            case "number4":
                updateDisplay({ data: 4 });
                break;
            case "number3":
                updateDisplay({ data: 3 });
                break;
            case "number2":
                updateDisplay({ data: 2 });
                break;
            case "number1":
                updateDisplay({ data: 1 });
                break;
            case "number0":
                updateDisplay({ data: 0 });
                break;
            case "equal":
                calculate();
                break;
        }
    })

    function updateDisplay({ clr, del, data }) {
        if (clr) { 
            input.text("");
            render= "";
            output.text(0);
            return;
        }
        if (del) {
            input.text(input.text().slice(0, -1));
            render = input.text();
            return;
        }
        input.append(data);
        render += data;
    }

    function calculate() {
        let result = Math.ceil((eval(render)*100.0))/100.0;
         output.text(result);
    }
})