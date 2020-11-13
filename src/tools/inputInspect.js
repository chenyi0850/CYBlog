export function inputInspect(name, string, reg) {
    if (!string) {
      this.$message({
        message: `${name}不能为空`,
        type: "warning"
      });
      return false;
    }
    if (!reg.test(string)) {
      if (name === "用户名") {
        this.$message({
          message:
            "用户名只能以字母开头，长度在5~16之间，只能由字母，数字，下划线组成",
          type: "warning"
        });
      }
      if (name === "密码") {
        this.$message({
          message:
            "密码需要以字母开头，长度在6~18之间，只能包含字母、数字和下划线",
          type: "warning"
        });
      }
      if (name === "邮箱") {
        this.$message({
          message: "邮箱格式错误",
          type: "warning"
        });
      }
      if (name === "手机号") {
        this.$message({
          message: "手机号格式错误",
          type: "warning"
        });
      }
      return false;
    }
    return true;
  }