module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "forループ必須",
    },
    schema: [],
  },
  create: function (context) {
    let hasFor = false;

    return {
      ForStatement() {
        hasFor = true;
      },
      "Program:exit"(node) {
        if (!hasFor) {
          context.report({
            node,
            message: "forループを使用してください",
          });
        }
      },
    };
  },
};
