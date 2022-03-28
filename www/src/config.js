// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2ffoaj6vpojskdf01af3njcp17",     // CognitoClientID
  "api_base_url": "https://4axl6ten2i.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "myappumair-sam-app.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d23khr7drzga2j.amplifyapp.com"                                      // AmplifyURL
};

export default config;
