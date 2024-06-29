$(document).ready(function () {
  //alert("manipulando Jquery");
  $("#btn_login").click(function () {
    // $("#form_login").removeClass("hiden");
    // $("#form_cadastro").addClass("hiden");
    $(".form_login").show();
    $(".form_cadastro").hide();
  });

  $("#btn_cadast").click(function () {
    // $("#form_cadastro").removeClass("hiden");
    // $("#form_login").addClass("hiden");
    $(".form_cadastro").show();
    $(".form_login").hide();
  });

  $("#login").submit(function (even) {
    //alert("clicei no butao entrar");
    even.preventDefault();
    if ($("#email").val() !== "" && $("#password").val() !== "") {
      alert("foi realizado login com sucesso!");
      $("#campoObrigatorio").text("");
      $("#email").css("border", "2px solid #999999").val("");
      $("#password").css("border", "2px solid #999999").val("");
    } else {
      $("#campoObrigatorio").text("Obrigatorio Preenxer todos o campos!");
      $("#email").css("border", "2px solid red");
      $("#password").css("border", "2px solid red");
    }
  });

  $("#cadastrado").submit(function (event) {
    event.preventDefault();
    //alert("foir realizado o cadastro com sucesso!");
    if (
      $("#name").val() !== "" &&
      $("#cep").val() !== "" &&
      $("#emailInput").val() !== "" &&
      $("#passwordInput").val() !== ""
    ) {
      alert("foir realizado o cadastro com sucesso!");
      $("#name").css("border", "2px solid #999999").val("");
      $("#cep").css("border", "2px solid #999999").val("");
      $("#emailInput").css("border", "2px solid #999999").val("");
      $("#passwordInput").css("border", "2px solid #999999").val("");
      $("#campoCadast").text("");
    } else {
      $("#name").css("border", "2px solid red");
      $("#cep").css("border", "2px solid red");
      $("#emailInput").css("border", "2px solid red");
      $("#passwordInput").css("border", "2px solid red");
      $("#campoCadast").text("Campo obrigatorio preenxar todos campo");
    }
  });
});
